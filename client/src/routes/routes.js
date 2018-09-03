import MainLayout from '../pages/layouts/main.vue'
import Home from '../pages/main'
import News from '../pages/news'
import NewsContent from '../pages/news/news-cont'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'news', component: News },
      { path: 'news-page', component: News },
      { path: 'state-page', component: News },
      { path: 'study-page', component: News },
      { path: 'prof-page', component: News },
      { path: 'users', component: News },
      { path: 'profile', component: News },
      { path: 'settings', component: News },
    ]
  },

  { path: '/news/:id', name: 'news-view', component: NewsContent },

  {
    path: '/*',
    redirect: '/',
  },
];