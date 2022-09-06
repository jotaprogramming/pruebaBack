import cassandra from 'cassandra-driver';

type Uuid = cassandra.types.Uuid;

interface IUuid {
    uuid : Uuid;
}

abstract class UuidGenerate implements IUuid{
    private _Uuid = cassandra.types.Uuid;

    get uuid() {
        return this._Uuid.random();
    }
}

export default UuidGenerate;