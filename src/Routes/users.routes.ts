import { Route } from './routes';
import * as usersController from '../Controllers/users.controller';

export class UsersRoutes extends Route{
    constructor(){
        super(usersController);
    }

    get router(){
        return this._router;
    }
    indexUser(){
        this.index()
    }

    showUser(){
        this.show()
    }

    storeUser(){
        this.store()
    }

    updateUser(){
        this.update()
    }

    destroyUser(){
        this.destroy()
    }

}
