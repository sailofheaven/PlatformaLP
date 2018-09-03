import { Router } from 'express';
import NewsController from '../controllers/newscontroller'
import TagController from '../controllers/tagcontroller'


let apiRoute = Router();

NewsController.setRoutes(apiRoute);
TagController.setRoutes(apiRoute);


apiRoute.get('/', (req, res) => {
    res.json({ message: 'welcome to api!' });
});


export { apiRoute }
