import cassandra from 'cassandra-driver';
import { IDatabase } from '../Interfaces/database.interface'
import dotenv from "dotenv";

dotenv.config();

type Uuid = cassandra.types.Uuid;

interface IUuid {
    uuid : Uuid;
}

class Database implements IDatabase, IUuid{
    private _authProvider = new cassandra.auth.PlainTextAuthProvider('', '');
    private _contactPoints = [process.env.CASSANDRA_POINT || '127.0.0.1'];
    private _localDataCenter = process.env.CASSANDRA_DATACENTER || 'datacenter1';
    protected keyspace = process.env.CASSANDRA_KEYSPACE;
    private _Uuid = cassandra.types.Uuid;

    get uuid() {
        return this._Uuid.random();
    }

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