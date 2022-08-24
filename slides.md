---
theme: default
background: ./future02.jpeg
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: Vue3 最新構文<br> &lt;script setup&gt; の紹介
hideInToc: true
download: true
---

# Vue3 最新構文<br> &lt;script setup&gt; の紹介

<div class="event-name-wrapper">
  <div class="event-name">
    <a href="https://future.connpass.com/event/254304/" target="_blank" rel="noopener">FUTURE CON 2022 - Jul 18th</a>
  </div>
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <!-- <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button> -->
  <a href="https://github.com/ota-meshi/future-tech-conference-slide-2022-07-18" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1, a {
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
h1 {
  font-weight: 700;
}
.event-name-wrapper {
  display: flex;
  justify-content: center;
}
.event-name {
  width: fit-content;
  background-color: #fffd;
  padding: 16px;
  font-weight: 700;
}
.event-name:hover {
  width: fit-content;
  background-color: #fff;
  padding: 16px;
  font-weight: 700;
}
</style>

<!-- prettier-ignore-start -->

---
src: ./src/00-intro.md
---

---
src: ./src/01-script-setup.md
---

---
src: ./src/02-syntaxes.md
---

---
src: ./src/03-reactive-transform.md
---

---
src: ./src/04-conclusion.md
---

<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->

---
layout: center
class: text-center big-title
hideInToc: true
---

<!-- prettier-ignore-end -->

# Thank you for your attention

<div class="ribbon">

[Support me ❤](https://github.com/sponsors/ota-meshi) or follow me!!  
GitHub: https://github.com/ota-meshi  
Twitter: https://twitter.com/omoteota  
Qiita: https://qiita.com/ota-meshi

</div>

<style>
  h1,
  a {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  .ribbon {
    position: absolute;
    bottom: 32px;
    right: -347px;
    transform: rotate(-25deg);
    background-color: #ddd5;
    width: 100%;
    font-size: 1rem;
  }
</style>
