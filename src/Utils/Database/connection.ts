import Database from './database';

class Connection {
    private _query = "SELECT * FROM system.local";
    private _db = new Database();

    async listen(){
        await this._db.create.connect();
        // Execute a query
        const rs = await this._db.create.execute(this._query);
        console.log(`Your cluster returned ${rs.rowLength} row(s)`);

        await  this._db.create.shutdown();
    }
}

export default Connection;