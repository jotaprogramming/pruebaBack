import { Route } from './routes';
import * as blockedUsers from '../Controllers/blockedUsers.controller';

export class BlockedUsersRoutes extends Route{
    constructor(){
        super(blockedUsers);
    }

    get router(){
        return this._router;
    }

    // indexUser(){
    //     this.index()
    // }

    // showUser(){
    //     this.show()
    // }

    // storeUser(){
    //     this.store()
    // }

    // updateUser(){
    //     this.update()
    // }

    // destroyUser(){
    //     this.destroy()
    // }

}