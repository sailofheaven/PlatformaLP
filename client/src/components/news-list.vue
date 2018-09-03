<template>
<ul class="new_list">
  <news-item v-for="item in items" :item="item" :key="item._id"></news-item>
</ul>
</template>

<script>
import NewsItem from "./news-item";

export default {
  name: "NewsList",
  props: {
    items: Array
  },
  data() {
    return {};
  },

  components: { NewsItem }
};
</script>

<style>
.new_list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
</style>
