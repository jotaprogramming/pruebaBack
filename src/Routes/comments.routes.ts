import { Route } from './routes';
import * as comentsController from '../Controllers/comments.controller';

export class CommentsRoutes extends Route{
    constructor(){
        super(comentsController);
    }

    get router(){
        return this._router;
    }

    // indexComment(){
    //     this.index()
    // }

    // showComment(){
    //     this.show()
    // }

    // storeComment(){
    //     this.store()
    // }

    // updateComment(){
    //     this.update()
    // }

    // destroyComment(){
    //     this.destroy()
    // }

}