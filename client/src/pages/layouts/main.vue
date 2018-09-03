<template>
  <div>
    <div class="sidebar">
      <div class="sidebar__header header">
        <img class="sidebar__header-logo" src="http://u8.filesonload.ru/c81e728d9d4c2f636f067f89cc14862c/6c1c37999aa2f762aa7355e00e059d04.png" />
        <div class="sidebar__header-text">Платформа LP</div>
        <div class="sidebar__header-adm">Админка</div>
      </div>
      <div class="sidebar__cont">
        <div class="search sidebar--mt">
          <input class="search__input search__input--type_text" type="text" placeholder="Поиск">
          <button class="search__input search__input--type_button" type="submit"><i class="fa fa-search"></i></button>
        </div>
        <button class="button sidebar__button sidebar--mt">ДОБАВИТЬ МАТЕРИАЛ</button>
        <ul class="sidebar--mt menu">
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/news" tag="li">Последние материалы</router-link>
          <hr class="menu__sep"/>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/" tag="li">Главная страница</router-link>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/news-page" tag="li">Страница новостей</router-link>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/state-page" tag="li">Страница статей</router-link>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/study-page" tag="li">Статьи для начинающих</router-link>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/prof-page" tag="li">Статьи для продвинутых</router-link>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/users" tag="li">Пользователи</router-link>
          <hr class="menu__sep"/>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/profile" tag="li">Профиль</router-link>
          <router-link exact-active-class="menu__link--active" class="menu__link" to="/settings" tag="li">Настройки</router-link>
          <li class="menu__link" to="/">Выход</li>
        </ul>
      </div>
     </div>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {};
  },

  methods: {}
};
</script>

