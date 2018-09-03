import { Router } from 'express';
import Tag from '../models/tag';

class TagController {
    constructor() {
        this.tagModel = Tag;
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


        apiRouter.use('/tags', router)
    }


    list() {
        return this.tagModel.find();
    }

}

export default new TagController();