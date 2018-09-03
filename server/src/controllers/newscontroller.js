import { Router } from 'express';
import News from '../models/news';
import 'babel-polyfill';

class NewsController {
    constructor() {
        this.newsModel = News;
    }

    setRoutes(apiRouter) {

        const router = Router();
        router.use('/', (req, res, next) => {
            this.req = req;
            this.res = res;
            next();
        });

        router.get('/', async (req, res) => {
            let result = await this.list();
            res.json(result);
        });

        router.get('/:id', async (req, res) => {
            let id = req.params.id
            let result = await this.get(id);
            console.log(result)
            res.json(result);
        });

        apiRouter.use('/news', router)
    }


    list() {
        const { tags, order = 'createDate' } = this.req.query;
        const sort = {}
        const filter = tags ? { 'tags.title': tags } : {}

        sort[order] = 1;

        return this.newsModel.find(filter).sort(sort).populate('tags');
    }

    get(id) {
        return this.newsModel.findById(id);
    }


}

export default new NewsController();

