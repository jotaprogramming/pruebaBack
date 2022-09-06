import {UserModel} from '../Models/users.model';
import { Controller } from '../Controllers/controller';
export class UsersController extends Controller{
    constructor(){
        super(new UserModel('users'));
    }
}
