---
layout: center
class: text-center big-title
---

<!-- prettier-ignore-end -->

# Reactivity Transform

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform？

::left::

- Vue3.3 で正式に導入**予定**の新構文  
  （Vue3.2 でも実験的機能として使用可能）

  - **リアクティブ API 周りの冗長な記述を少なくしよりシンプルに記述できる**
  - SFC 以外（JavaScript・TypeScript）でも使用できます  
    (Vite を使用している場合)

::right::

```vue
<script setup>
import MyComponent from "./MyComponent.vue";

const count = $ref(0);

function handleClick() {
  count++;
}
</script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
```

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform？

Ref オブジェクトの`.value`を消し去れます。

::left::

以前：

```vue
<script setup>
import { ref, toRefs, computed } from "vue";
import { useMouse } from "@vueuse/core";

const count = ref(0);

function handleClick() {
  count.value++;
}

const { x, y } = toRefs(useMouse());

const mousePosition = computed(() => `x: ${x.value}, y: ${y.value}`);
</script>
```

::right::

Reactivity Transform 使用：

```vue
<script setup>
import { useMouse } from "@vueuse/core";

let count = $ref(0);

function handleClick() {
  count++;
}

let { x, y } = $(useMouse());

const mousePosition = $computed(() => `x: ${x}, y: ${y}`);
</script>
```

[DEMO](https://sfc.vuejs.org/#eNqFks9uwjAMxl/FinYoGjSTdmNlYtp50h4gByA1EGj+KEkZqOq7z21gKhNsl8pxPv/8OW7D3pzLDzWyKSuC9MpFCBhr9yqM0s76CA3UAT8sfaCFtbcaBJtTBSW4tB4FexFGmAojSFubCDN48LjOnkZ9fl0bGZU1sF2assL3Ssl9NoJGGEj6x0fStRdEA8cxnKgTUbJL42yUWNKaEEF3qU8bVI8lnbTa1RHLjLizV1gcp/DQHFvidMGpXXTVBU/j0WB0iKhdtYxIJ4CiVIc+oHBVx0jUuex8zgQbuBbsLAJomvOsLRnv63gqPCt61xeL005+bTqVFTw1LviPHTZm6dkneunyXbCGFtO/lThfBMEImNoIRnvozuQzRhemnIe17Na5C7n1G05R7smn0phj0JOVt18BPYEFGw8YnJIH9BOPpkSP/i/mL+l97vVPMgTWxu03Oa2NDzVcEfGY65uQsF16LP/DJNVNECkmJWp1D3G555Va8cPzkNEhaGEta78BftUW3w==)

<!-- prettier-ignore-start -->

---
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is Reactivity Transform？

詳細は [Reactivity Transform] のドキュメントを参照してください。  
[https://vuejs.org/guide/extras/reactivity-transform.html](https://vuejs.org/guide/extras/reactivity-transform.html)

現在、実験的機能であるため、このスライドでは詳細は割愛します。  
また、このスライドに載せた記述方法や機能は変更になる可能性があります。

[reactivity transform]: https://vuejs.org/guide/extras/reactivity-transform.html
