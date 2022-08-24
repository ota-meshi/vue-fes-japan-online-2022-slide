---
layout: center
class: text-center big-title
---

<!-- prettier-ignore-end -->

# &lt;script setup&gt;の書き方

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
title: 基本
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（基本）

::left::

- &lt;script setup&gt; と記述します
- トップレベルの変数はテンプレートで直接使用できます

::right::

<!-- prettier-ignore-start -->

```vue {all|1|2,4,11-12}
<script setup>
const msg = "Hello!";

function handleClick() {
  alert(msg);
}
</script>

<template>
  <button
    @click="handleClick">
    {{ msg }}
  </button>
</template>
```

<!-- prettier-ignore-end -->

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNpNkMFOwzAMhl/F+LRJrLmXDoG48BC+dCEbHYkTxS4cqr47bjtNyym/7f/L70z4XkrzOwZssRNfh6IgQcfySuwzi0KSCxyB8DPEmJ8IX4iJzyN7HTLDd89fMXzEwf/s9jARA/QxVN2ZbW+jM3HnNq4RTWhIJfYaTAF0p1E1WxnsvPmFciR8YBKucwDTtAaZjWc2t/ms17k7EJ9xSCVXPaS+NFfJbDutiejWEMJ2y7jUbOlF23uqRVrn5OyXn7hKk+vF2a2pI+uQQhMkHU41/0moBiZcEJZkxvkfPmpuLQ==)

</div>
<div v-if="$slidev.nav.clicks === 1">

`<script>` ブロックに `setup` 属性を記述します。

</div>
<div v-if="$slidev.nav.clicks === 2">

トップレベルの変数はテンプレートで直接使用できます。

</div>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（基本）

別の方法ではこのように書いていました。

::left::

### Composition API

```vue
<script>
export default {
  setup() {
    const msg = "Hello!";
    function handleClick() {
      alert(msg);
    }
    return {
      msg,
      handleClick,
    };
  },
};
</script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
```

::right::

### Options API

```vue
<script>
export default {
  data() {
    return {
      msg: "Hello!",
    };
  },
  methods: {
    handleClick() {
      alert(this.msg);
    },
  },
};
</script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
```

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
title: リアクティブ・コンポーネント
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（リアクティブ・コンポーネント）

::left::

- リアクティブな状態を管理するには[Reactivity API](https://vuejs.org/api/reactivity-core.html)を使用します
- コンポーネントは`import`するだけで使用できます  
  （トップレベルの変数と同じ扱いです）

::right::

```vue {all|2,5,8|3,13}
<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
</script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
```

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqNUttO3DAQ/ZWR+0BWbBKqogq5AfWiPvYP/JK1J4shsS3b2YKi/HvHTlgtFAEPljy343PmeGI/nKsOIzLOmiC9dhECxtHdCKMHZ32ECTx2MEPn7QCCUa9g347VP48/xxiteSpX9VMmoeZOYaQ1IYK0o4lwneCKi00udKORUdP0bWtUj796Le+LDUzCwNJeHdp+xPNz6p6FaeqFIpGjIOLg+jYiRQDNkch3mVCuBTvBFCw3AUzTSmMmOJo6sqV6Ux8R2ZYt+sqhddVdsIb2k1mJtRAE4wvPlMtSOV1uY3SB13XoZNJ/Fyrr9zXdKk+v6gErDEO58/ZvQE/Agm1PMGpKHtCXHo1Cj/4tzBet/+EmWNI4k5RTR176DH1r9rSsJCjvaPEKB52sUthpg78pCM0EBXI4y9s923A4WK1gvik2eS10XjUTVzchQxbr+BYwj73j6e4DjjahtxHqZaBeJp6bmYFDfOwRgrQOVe5dsVdyu1be7z39DFVK21vP4dPVTn65bOnj5br1tGYOF8/i0rdKj4HDpXtYC65VSps9hyv3AJ+/rvlFZ6JAb7P5H+rELoY=)

</div>
<div v-if="$slidev.nav.clicks === 1">

リアクティブな状態を管理するには[Reactivity API](https://vuejs.org/api/reactivity-core.html)を使用します。

</div>
<div v-if="$slidev.nav.clicks === 2">

コンポーネントは`import`するだけで使用できます。

</div>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（リアクティブ・コンポーネント）

別の方法ではこのように書いていました。

::left::

### Composition API

```vue
<script>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  setup() {
    const count = ref(0);
    function handleClick() {
      count.value++;
    }
    return {
      count,
      handleClick,
    };
  },
};
</script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
```

::right::

### Options API

```vue
<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
};
</script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
```

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
title: カスタムディレクティブ・非同期
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（カスタムディレクティブ・非同期）

::left::

- カスタムディレクティブは`v`で始まる変数を使用します
- トップレベル`await` も使用できます  
  <span style="opacity: 0.7">(Vue2では使用できません)</span>

::right::

```vue {all|2,7|3}
<script setup>
import vMyDirective from "./my-directive.js";
const post = await fetch(`/api/post/1`).then((r) => r.json());
</script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
```

<div v-if="$slidev.nav.clicks === 1">

カスタムディレクティブを使用するには、`v`で始まる変数名を使用します。

</div>
<div v-if="$slidev.nav.clicks === 2">

トップレベル`await` を使用することもできます。

</div>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（カスタムディレクティブ・非同期）

別の方法ではこのように書いていました。

::left::

### Composition API

```vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  async setup() {
    const post = await fetch(`/api/post/1`).then((r) => r.json());
    return {
      post,
    };
  },
};
</script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
```

::right::

### Options API

```vue
<script>
import vMyDirective from "./my-directive.js";
export default {
  directives: {
    "my-directive": vMyDirective,
  },
  data() {
    return {
      post: "", // 非同期はスマートな書き方ができない
    };
  },
  async mounted() {
    this.post = await fetch(`/api/post/1`).then((r) => r.json());
  },
};
</script>

<template>
  <p v-my-directive>
    {{ post }}
  </p>
</template>
```

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
title: Prop・カスタムイベント
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（Prop・カスタムイベント）

::left::

- Props を定義・使用するには `defineProps` というコンパイラマクロを使用します
- カスタムイベントを定義・使用するには `defineEmits` というコンパイラマクロを使用します

::right::

```vue {all|3-5,13,18|6,10,13}
<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue", "send"]);
const inputRef = ref();

function handleInput() {
  emit("update:modelValue", inputRef.value.value);
}
function handleClick() {
  emit("send", props.modelValue);
}
</script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
```

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqVUsFu2zAM/RVClzhYYt+9tMhQ7LDDgGEFdpl2cG26VWdLgiSnKAz/e0kpdtIULdCLLVHk4+PjG8U3a/PDgKIUO187ZQN4DIO9llr11rgAIzhsYYLWmR6koFwpvi6vP59vDJ006jBn5MVZkLFjPoDUtdE+QG8a7OCKYbPVai211O2g66CMhodKNx3eom6yQ9UNuIaRS6sOXUgR+AIreKo80SR0Lp+k3hWJO7GmS8DedlVAugHszhketrH5lRTxLwXsCaah+6mxFEUqvHOv/uMYa6bYbmkhNiIpse0rmz96o0nJyFkeH7wUZZqCY1GOkg4PIVhfFoVva9bo0efG3Rd0yt2gg+oxR99v75x58ugIWIrNGUZBwQO6rSPC6NB9hHmR+gaXYWmoiUa5WNynTZEWbJ2xnhbcYKs0/uJbFgWIAv7hLZZwG5zS9zTTtF4KsVdhqftOF5/9lWKwDSldnopJCurJi5Pi36laaTuE30QrWYsf3jjrB+dkR1dxu+wd/Bksj6ZLX0YkoS4gbzpV/7+ATNw2SYn8hHxE+MiusTEPQKacSZBPy8hgNu6RJuxjxmLfOB2FZwMPIRDNfc0Ml6TIV4pr5rgrUg7ln3t6egGz7nCT)

</div>
<div v-if="$slidev.nav.clicks === 1">

Props を定義・使用するには `defineProps` というコンパイラマクロを使用します。

</div>
<div v-if="$slidev.nav.clicks === 2">

カスタムイベントを定義・使用するには `defineEmits` というコンパイラマクロを使用します。

</div>

<style>
  .sub-two-cols :deep(.sub-two-cols__right) {
    transform: scale(0.95);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（Prop・カスタムイベント）

別の方法ではこのように書いていました。

::left::

### Composition API

```vue
<script>
import { ref } from "vue";

export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  setup(props, { emit }) {
    const inputRef = ref();

    function handleInput() {
      emit("update:modelValue", inputRef.value.value);
    }
    function handleClick() {
      emit("send", props.modelValue);
    }
    return {
      inputRef,
      handleInput,
      handleClick,
    };
  },
};
</script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
```

::right::

### Options API

```vue
<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "send"],
  methods: {
    handleInput() {
      this.$emit("update:modelValue", this.$refs.inputRef.value);
    },
    handleClick() {
      this.$emit("send", this.modelValue);
    },
  },
};
</script>

<template>
  <input ref="inputRef" :value="modelValue" @input="handleInput" />
  <button @click="handleClick">send</button>
</template>
```

<style>
  .shiki-container {
    transform: scale(0.7);
    transform-origin: top left;
  }
</style>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
title: Prop・カスタムイベント with TypeScript
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（with TypeScript）

::left::

- `defineProps`と`defineEmits`は TypeScript を使用する場合、型のみの定義を使用できます
  - `defineProps`では Prop の型を定義します
    - デフォルト値には `withDefaults` を併用します
  - `defineEmits`では関数の型を定義します

::right::

```vue {all|4-7|6|3,8-10|12-15}
<script setup lang="ts">
// ...
const props = withDefaults(
  defineProps<{
    modelValue: string;
    message?: "Hello!" | "Goodby!";
  }>(),
  {
    message: "Hello!",
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", newValue: string): void;
  (e: "send", sendValue: string): void;
}>();
// ...
</script>
```

<div v-if="$slidev.nav.clicks === 0">

[DEMO](https://sfc.vuejs.org/#eNqFU01v2zAM/SucLnGwxr57aZehG7YdBgwbsJMujk0n7mxJkOQERer/XlKy81W0zSEWpcenR1LvIL4Yk+56FLlYutI2xoND35s7qZrOaOvhABZrGKC2ugMpCCvFp+Ppr8d7TSuFyk+INDvbZO6AB5Cq1Mp56HSFLdwybTKbzaWSqu5V6RutYFuoqsW/qKpkV7Q9zuHAqUWL1scd+Agz2BeOZBI7pw9SLbOonVRT4LEzbeGRIoDlucLdIlx+K0X4SgEroqkoPl0sRRYT1/bieziEnCFcd7xC3IjYiUVXmPTBaUWdDJrleOCkyGMVvBfakdNi671xeZa5uuQePbhU201Gq9T2yjcdpui6xdrqvUNLxFLcnHFktLlDu7AkGC3atzivoC94mZaKGqiUq8FdPwpoC7WhZnFN7z4QqbIMFuOPwzh9Y7VxNP1947dfsS761ruEJVRYNwp/8/FybFdo+D+eeg7O20ZtwkOiA3Su2OBnLvoHtq3+QKN8ouC71tX6kaIAHO6SeejaxBfTzrPCMVU/p4QoELvGk74o5xsFo5wk5PWmorHnJ2VEAQr3FyrnOex0UwUNMY1fGSP5+wqUxY4+uWjcyTiNMr3/Q72O3mH0C+v8ZEwy2oZLSV7RPJGlwVXxnxmpF1eU921T/r+inOoJ00xPzCPDG34kG8UpDMPRYUEL10Rva9JFA82DqMmso3JYBcTRsqFg2p5M23tPylcliz6CQgn0Zln2MosYwp/5WCoxPAOdsbxn)

</div>
<div v-if="$slidev.nav.clicks === 1">

`defineProps`では Prop の型を定義します。

</div>
<div v-if="$slidev.nav.clicks === 2">

必須・任意は型(`?:`)で示します。

</div>
<div v-if="$slidev.nav.clicks === 3">

デフォルト値を定義するには `defineProps`に加えて`withDefaults` を併用します。

</div>
<div v-if="$slidev.nav.clicks === 4">

`defineEmits`では関数の型を定義します。

</div>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（with TypeScript）

型のみ定義方法を使用しない場合はこのように書いていました。

```vue
<script setup lang="ts">
// ...
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  message: {
    type: String, // ユニオン型にはできません。
    default: "Hello!",
  },
});
const emit = defineEmits({
  "update:modelValue": (newValue: string) => true,
  send: (sendValue: string) => true,
});
// ...
</script>
```

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
title: その他
level: 2
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方（その他）

- [`defineExpose`](https://vuejs.org/api/sfc-script-setup.html#defineexpose)を使用して外部から参照できるインスタンスプロパティを定義します
- [`useSlots`と`useAttrs`](https://vuejs.org/api/sfc-script-setup.html#useslots-useattrs)を使用して`$slots`や`$attrs`のような情報にアクセスできます
- `<script setup>`とは別に[`<script>`ブロック](https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script)を定義できます
  - `export default {}`を定義することで、`inheritAttrs`などのコンポーネントオプションを定義できます
  - `.vue`が`export`する情報を定義できます
  - module が呼び出されたときに一度だけ実行されるスクリプトを書くことができます

<br />

::left::

```vue
<script setup>
import { useSlots, useAttrs } from "vue";

const slots = useSlots();
const attrs = useAttrs();
// ...
</script>
```

::right::

```vue
<script>
// module が呼び出されたときに一度だけ実行される
runSideEffectOnce();

// オプションの定義
export default {
  inheritAttrs: false,
};
</script>

<script setup>
// ...
</script>
```

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>
