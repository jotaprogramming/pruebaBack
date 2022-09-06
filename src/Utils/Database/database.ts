import cassandra from 'cassandra-driver';
import { IDatabase } from '../Interfaces/database.interface'
import UuidGenerate from './uuidGenerate';
import dotenv from "dotenv";

dotenv.config();

class Database extends UuidGenerate implements IDatabase{
    private _authProvider = new cassandra.auth.PlainTextAuthProvider('', '');
    private _contactPoints = [process.env.CASSANDRA_POINT!];
    private _localDataCenter = process.env.CASSANDRA_DATACENTER;
    protected keyspace = process.env.CASSANDRA_KEYSPACE;

    get create() {
        const client = new cassandra.Client({
            contactPoints: this._contactPoints,
            authProvider: this._authProvider,
            localDataCenter: this._localDataCenter,
            keyspace: this.keyspace,
        });
        return client;
    }
}

export default Database;