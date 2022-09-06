<template>
  <div class="slidev-layout default sub-2-cols">
    <slot />
    <div grid="~ cols-2 gap-4" class="sub-2-cols__grid">
      <div class="sub-2-cols__left">
        <slot name="left" />
      </div>
      <div class="sub-2-cols__right">
        <slot name="right" />
      </div>
    </div>
    <slot name="bottom" />
  </div>
</template>
