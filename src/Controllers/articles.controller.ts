import {ArticlesModel} from '../Models/articles.model';
import { Controller } from '../Controllers/controller';
export class ArticlesController extends Controller{
    constructor(){
        super(new ArticlesModel('articles'));
    }
}