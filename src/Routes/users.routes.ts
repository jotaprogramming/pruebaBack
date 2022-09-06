import { Route } from './routes';
import * as usersController from '../Controllers/users.controller';

class UserRoutes extends Route{
    constructor(){
        super(usersController);
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