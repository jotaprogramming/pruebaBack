import Database from './database';

class Connection {
    private _query = 'SELECT now() FROM system.local';
    private _db = new Database();

    listen(){
        this._db.create.execute(this._query, [], (err, res) => {
            if (err) {
                console.log(`Error ${err}`);
                return false;
            }
            console.log('Connected database');
        });
    }
}

export default Connection;