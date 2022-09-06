import { Route } from './routes';
import * as articlesController from '../Controllers/articles.controller';

export class ArticlesRoutes extends Route{
    constructor(){
        super(articlesController);
    }

    get router(){
        return this._router;
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