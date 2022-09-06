import Query from './defaultQuery';

class Model extends Query{

    constructor(table : string){
        super(table, 'blocked_user_id');
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

export default Model;