import { toArray } from "@antfu/utils";
import type { VNode, VNodeArrayChildren } from "vue";
import {
  defineComponent,
  h,
  isVNode,
  resolveDirective,
  withDirectives,
} from "vue";

export default defineComponent({
  props: {
    depth: {
      type: [Number, String],
      default: Infinity,
    },
  },
  render() {
    const click = resolveDirective("click")!;

    let seq = 0;

    const applyDirective = (node: VNode) =>
      withDirectives(node, [[click, seq++, "", {}]]);

    let defaults = this.$slots.default?.();

    if (!defaults) return;

    defaults = toArray(defaults);
    const depth = Number(this.depth);

    const mapChildren = (children: VNodeArrayChildren, level: number) => {
      return children.map((i) => {
        if (!isVNode(i)) {
          return i;
        }

        if (isUlOrOl(i)) {
          return applyChildren(i, level);
        }

        const newNode = applyDirective(h(i));

        if (Array.isArray(i.children) && level < depth) {
          const nest = i.children.some(isUlOrOl);
          if (i.children.some(isUlOrOl)) {
            const children = i.children.map((c) =>
              isUlOrOl(c) ? applyChildren(c, level + 1) : c
            );
            newNode.children = children;
          }
        }
        return newNode;
      });
    };

    return mapChildren(defaults, 1);

    function applyChildren(node: UlOrOl, level: number) {
      return h(node, {}, [mapChildren(node.children, level)]);
    }
  },
});

type UlOrOl = VNode & { children: VNodeArrayChildren };

function isUlOrOl(node: VNodeArrayChildren[number]): node is UlOrOl {
  return (
    isVNode(node) &&
    ["ul", "ol"].includes(node.type as string) &&
    Array.isArray(node.children)
  );
}
