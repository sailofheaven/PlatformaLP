<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./pages/style.css";

export default {
  name: "Application"
};
</script>

<style>
@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("assets/fonts/museo_sans_cyrl_100.ttf");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("assets/fonts/museo_sans_cyrl_300.ttf");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("assets/fonts/museo_sans_cyrl_500.ttf");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("assets/fonts/museo_sans_cyrl_700.ttf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Museo Sans Cyrl";
  src: url("assets/fonts/museo_sans_cyrl_900.ttf");
  font-weight: 900;
  font-style: normal;
}

html,
body {
  height: 100%;
  margin: 0;
  font-weight: 700;
  font-family: Museo Sans Cyrl;
}
</style>
