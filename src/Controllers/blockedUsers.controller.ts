import {BlockedUsersModel} from '../Models/blockedUsers.model';
import { Controller } from '../Controllers/controller';
export class BlockedUsersController extends Controller{
    constructor(){
        super(new BlockedUsersModel('blocked_users'));
    }
}