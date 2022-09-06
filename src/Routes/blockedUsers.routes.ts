import { Route } from './routes';
import * as blockedUsers from '../Controllers/blockedUsers.controller';

class BlockedUsersRoutes extends Route{
    constructor(){
        super(blockedUsers);
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