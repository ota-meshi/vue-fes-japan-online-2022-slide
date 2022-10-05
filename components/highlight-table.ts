import { toArray } from "@antfu/utils";
import type { VNode, VNodeArrayChildren } from "vue";
import { defineComponent, h, isVNode, ref, watch, computed } from "vue";

export default defineComponent({
  props: {
    highlightRows: {
      type: [Array, String],
      default: undefined,
    },
    on: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const tableEl = ref<HTMLTableElement>();
    const highlightRows = computed(() =>
      props.on && props.highlightRows
        ? parseHighlightRows(props.highlightRows)
        : null
    );

    watch(tableEl, renderHighlightRows);
    watch(highlightRows, renderHighlightRows);

    function renderHighlightRows() {
      const table = tableEl.value;
      if (!table) {
        return;
      }
      const highlightRowsValue = highlightRows.value;
      const highlight: (i: number) => boolean = highlightRowsValue
        ? (i) => highlightRowsValue.includes(i)
        : () => true;
      for (let index = 0; index < table.rows.length; index++) {
        const row = table.rows[index];
        if (highlight(index)) {
          row.style.opacity = "1";
        } else {
          row.style.opacity = "0.3";
        }
      }
    }
    return () => {
      let defaults = ctx.slots.default?.();

      if (!defaults) return;

      defaults = toArray(defaults);

      const table = defaults.find(isTable);

      if (!table) {
        return "`<table>` not found.";
      }

      return defaults.map((n) => {
        if (n !== table) {
          return n;
        }
        return h(table, {
          ref: (v) => (tableEl.value = v as HTMLTableElement),
        });
      });
    };
  },
});

type Table = VNode & { children: VNodeArrayChildren };

function isTable(node: VNodeArrayChildren[number]): node is Table {
  return isVNode(node) && node.type === "table" && Array.isArray(node.children);
}

function parseHighlightRows(highlightRows: string | any[]): number[] {
  if (Array.isArray(highlightRows)) {
    return highlightRows.map(Number);
  }
  const result: number[] = [];
  for (const element of `${highlightRows}`.split(",").map((s) => s.trim())) {
    if (/^\d+-\d+$/u.test(element)) {
      const [s, e] = element.split("-").map(Number);
      for (let num = s; num <= e; num++) {
        result.push(num);
      }
    } else {
      result.push(Number(element));
    }
  }
  return result;
}
