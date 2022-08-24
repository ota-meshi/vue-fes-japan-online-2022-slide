---
layout: center
class: text-center big-title
title: "What is &lt;script setup&gt;?"
---

<!-- prettier-ignore-end -->

# What is &lt;script setup&gt;？🤔

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
hideInToc: true
---

<!-- prettier-ignore-end -->

## What is &lt;script setup&gt;？

::left::

- Vue3.2 で正式に導入された SFC 用の新構文  
  **7/1にリリースされた Vue2.7 にも導入されました。**

  - **冗長な記述を少なくしよりシンプルに記述できる**
  - **実行時のパフォーマンスの向上**  
    （他の記述方法からのコンパイルでは必要だった中間処理をバイパス）
  - **TypeScript との親和性向上**  
     （型情報によるコンポーネント定義の生成。IDE のサポート）

::right::

```vue
<script setup>
import { ref } from "vue";
import MyComponent from "./MyComponent.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
</script>

<template>
  <button @click="handleClick">
    {{ count }}
  </button>

  <MyComponent />
</template>
```
