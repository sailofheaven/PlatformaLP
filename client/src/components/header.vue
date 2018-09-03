<template>
<div class="header_page header">
    <div class="header_page__title">{{title}}</div>
    <slot></slot>
</div>
</template>

<script>
export default {
  name: "HeaderPage",
  props: ["title"]
};
</script>

<style>
.header_page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e7eaee;
  padding: 0 30px;
}
.header_page__title {
  color: #9da4ae;
  font-weight: 300;
  font-size: 24px;
}
</style>
