import {CommentsModel} from '../Models/comments.model';
import { Controller } from '../Controllers/controller';
export class CommentsController extends Controller{
    constructor(){
        super(new CommentsModel('comments'));
    }
}