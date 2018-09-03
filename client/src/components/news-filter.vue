<template>
<div class="filter">
  <div class="filter__field">
    <label class="filter__label" for="tag">Теги:</label>
    <select class="filter__select" id="tag" @change="$emit('setTag', $event.target.value)">
      <option selected :value="null">все</option>
      <option v-for="tag in tags" :key="tag._id" :value="tag.title">{{tag.title}}</option>
    </select>
  </div>
   <div >
    <label class="filter__label" for="order">Сортировать:</label>
    <select class="filter__select" id="order" @change="$emit('setOrder', $event.target.value)">
      <option v-for="item in orderFields" :key="item.value" :value="item.value">{{item.title}}</option>
    </select>
  </div>
</div>
</template>

<script>
import TagsService from "../services/tags-service";

export default {
  name: "NewsFilter",
  data() {
    return {
      tags: [],
      orderFields: [
        { value: "createDate", title: "по дате" },
        { value: "title", title: "по заголовку" }
      ]
    };
  },

  methods: {
    async getTags() {
      try {
        const resp = await TagsService.list();
        this.tags = resp.data;
      } catch (error) {
        throw error;
      }
    }
  },
  mounted() {
    this.getTags();
  }
};
</script>

<style>
.filter {
  display: flex;
  justify-content: space-around;
  flex: 1 1 auto;
  color: #858f9b;
  font-weight: 700;
  font-size: 14px;
}
.filter__select {
  border: none;
  background-color: inherit;
  color: #858f9b;
  font-weight: 700;
  font-size: 14px;
}
</style>
