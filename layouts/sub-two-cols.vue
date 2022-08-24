<template>
  <div class="slidev-layout default sub-two-cols">
    <slot />
    <div grid="~ cols-2 gap-4">
      <div class="sub-two-cols__left">
        <slot name="left" />
      </div>
      <div class="sub-two-cols__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
