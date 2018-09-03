<template>
<li class="news_item">
  <div class="news_item__info">
    <div class="news_item__title">{{item.title}}</div>
    <div class="news_item__date">Обновлено {{getDT(item.updateDate)}}</div>
    </div>
    <div class="news_item__info">
  <div class="news_item__tags">
    <div :style="{backgroundColor:setBG(tag.title)}" v-for="tag in item.tags" :key="tag._id" class="tag">{{tag.title.toUpperCase()}}</div>
  </div>
  <router-link tag="button" :to="{ name: 'news-view', params: { id: item._id }}" class="button">
  Посмотреть
  </router-link>
  </div>
</li>
</template>

<script>
import ConvertColor from "../services/convert-color";
import moment from 'moment'

export default {
  name: "NewsItem",
  props: ["item"],
  components: {},
  methods: {
    setBG(val) {
      return ConvertColor(val);
    },
    getDT(ts){
      return moment(Date(ts)).format('LL');
    }
  }
};
</script>

<style>
.news_item {
  height: 125px;
  border-bottom: 1px solid rgba(210, 212, 213, 0.73);
  padding: 0 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news_item__date {
  font-weight: 500;
  font-size: 12px;
  color: #aeb2b8;
}
.news_item__title {
  line-height: 19px;
  font-size: 20px;
  font-weight: 500;
  color: #080808;
}
.news_item__info {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
.news_item__tags {
  display: flex;
}

.tag:first-child {
  margin-left: 0;
}

.tag {
  padding: 5px;
  font-weight: 700;
  font-size: 10px;
  border-radius: 4px;
  line-height: 10px;
  margin-left: 10px;
  letter-spacing: 2px;
  color: #fff;
  height: 13px;
}
</style>
