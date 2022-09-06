import { Route } from './routes';
import * as articlesController from '../Controllers/articles.controller';

class ArticlesRoutes extends Route{
    constructor(){
        super(articlesController);
    }
    indexArticle(){
        this.index()
    }

    showArticle(){
        this.show()
    }

    storeArticle(){
        this.store()
    }

    updateArticle(){
        this.update()
    }

    destroyArticle(){
        this.destroy()
    }

}