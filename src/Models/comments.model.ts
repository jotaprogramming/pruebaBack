import Query from './defaultQuery';

const key_name = 'comment_id';

class Model extends Query{

    constructor(table : string){
        super(table, key_name);
    }

    async make(body : any) {
        const result : any = await this.store(body, [key_name, 'created_at'])
        return result;
    }
}

export default Model;