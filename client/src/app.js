import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import moment from 'moment'

moment.locale('ru')
new Vue({
    router,
    el: '#app',
    render: h => h(App)
})