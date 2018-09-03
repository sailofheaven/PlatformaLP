<template>

    <div>
    <header-page :title="store.title">
      <button class="button" @click="$router.go(-1)">Назад</button>
    </header-page>
    
    <div class="content">
      <div v-html="store.text"></div>
    </div>
    </div>
</template>

<script>
import NewsService from "../../services/news-service";
import HeaderPage from "../../components/header.vue";

export default {
  name: "NewsPage",
  data() {
    return {
      store: {}
    };
  },
  methods: {
    async getNews() {
      try {
        const resp = await NewsService.get(this.$route.params.id);
        this.store = resp.data;
      } catch (error) {
        throw error;
      }
    }
  },
  mounted() {
    this.getNews();
  },
  components: {
    HeaderPage
  }
};
</script>

