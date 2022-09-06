import { IUser } from '../Utils/Interfaces/model.interface';
import Database from '../Utils/Database/database';
import Query from './defaultQuery';

export class CommentModel extends Query{

    constructor(table : string){
        super(table, 'comment_id');
    }

    async make(body : any) {
        try {
            const attr = Object.keys(body).join(',');
            const bodyArray = [this._db.uuid, new Date, ...Object.values(body)];
            const result : any = await this._db.create.execute(`INSERT INTO ${this._table} (
                comment_id,
                created_at,
                ${attr}
            ) VALUES (?, ?, ?, ?, ?)`, bodyArray, { prepare: true })
            return result;
        } catch (error : any) {
            return error;
        }
    }
}