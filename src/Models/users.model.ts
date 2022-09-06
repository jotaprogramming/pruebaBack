import { IUser } from '../Utils/Interfaces/model.interface';
import Database from '../Utils/Database/database';
import Query from './defaultQuery';

export class UserModel extends Query{

    constructor(table : string){
        super(table, 'user_id');
    }

    async make(body : any) {
        try {
            const attr = Object.keys(body).join(',');
            const bodyArray = [this._db.uuid, new Date, ...Object.values(body)];
            const result : any = await this._db.create.execute(`INSERT INTO ${this._table} (
                user_id,
                created_at,
                ${attr}
            ) VALUES (?, ?, ?, ?, ?)`, bodyArray, { prepare: true })
            return result;
        } catch (error : any) {
            return error;
        }
    }
}
