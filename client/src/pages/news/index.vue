<template>
<div>
  <header-page title="Последние материалы">
    <news-filter @setOrder="setOrder" @setTag="setTag"></news-filter>
  </header-page>
    
  <div class="content">
    <news-list v-bind:items="news"></news-list>
  </div>
</div>
</template>


<script>
import NewsList from "../../components/news-list";
import NewsFilter from "../../components/news-filter";
import NewsService from "../../services/news-service";
import HeaderPage from "../../components/header.vue";

export default {
  name: "NewsPage",
  data() {
    return {
      newsStore: [],
      order: "createDate",
      tag: ""
    };
  },

  components: {
    NewsList,
    NewsFilter,
    HeaderPage
  },
  methods: {
    async getNews() {
      try {
        const resp = await NewsService.list();
        this.newsStore = resp.data;
      } catch (error) {
        throw error;
      }
    },
    setOrder(value) {
      this.order = value;
    },
    setTag(value) {
      this.tag = value;
    },
    sort(a, b) {
      let keyA = ([] + a[this.order]).toUpperCase();
      let keyB = ([] + b[this.order]).toUpperCase();

      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    }
  },

  mounted() {
    this.getNews();
  },
  computed: {
    news() {
      return this.newsStore
        .filter(
          value =>
            !this.tag || value.tags.filter(t => this.tag == t.title).length
        )
        .sort(this.sort);
    }
  }
};
</script>

<style>
</style>
