import api from './api'
const NewsService = {
    list() {
        return api().get('news')
    },
    get(id) {
        return api().get(`news/${id}`)
    }
}
export default NewsService;