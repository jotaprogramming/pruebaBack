import { Route } from './routes';
import * as comentsController from '../Controllers/coments.controller';

class CommentsRoutes extends Route{
    constructor(){
        super(comentsController);
    }
    indexComment(){
        this.index()
    }

    showComment(){
        this.show()
    }

    storeComment(){
        this.store()
    }

    updateComment(){
        this.update()
    }

    destroyComment(){
        this.destroy()
    }

}