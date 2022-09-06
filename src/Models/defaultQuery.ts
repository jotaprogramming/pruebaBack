import Database from '../Utils/Database/database';

class Query {
    protected _keyName : any;
    protected _table : string = '';
    protected _db : any = new Database();
    
    constructor(table : string, id : any){
        this._keyName = id;
        this._table = `${this._db.keyspace}.${table}`;
    }
    
    async findAll(){
        try {
            const result : any = await this._db.create.execute(`SELECT * FROM ${this._table}`, [], { prepare: true });

            return result.rows;
        } catch (error : any) {
            return error;
        }
    }

    async findOne(id : any) {
        try {
            const result : any = await this._db.create.execute(`SELECT * FROM ${this._table} WHERE ${this._keyName} = ?`, [ id ], { prepare: true });

            return result.rows;
        } catch (error : any) {
            return error;
        }
    }

    async update(id : any, body : any){
        try {
            const parameters = {
                ...body,
                "updated_at": new Date
            }

            const attr = Object.keys(parameters).map((element) => {
                return element + ' = ?';
            }).join(',');

            const data = Object.values(parameters);
            
            const result : any = await this._db.create.execute(`UPDATE ${this._table} SET ${attr} WHERE ${this._keyName} = ?`, [...data, id], { prepare: true });

            return result;
        } catch (error) {
            return error;
        }
    }

    async delete(id : any){
        try {
            const result : any = await this._db.create.execute(`UPDATE ${this._table} SET delete_at = ? WHERE ${this._keyName} = ?`, [ new Date, id ], { prepare: true });

            return result;
        } catch (error) {
            return error;
        }
    }
}

export default Query;