import api from './api'
const NewsService = {
    list() {
        return api().get('tags')
    }
}
export default NewsService;