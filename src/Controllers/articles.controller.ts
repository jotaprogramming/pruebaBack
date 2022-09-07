import { Request, Response } from 'express';
import Model from '../Models/articles.model';

const model = new Model('articles');

class Controller {

    async index(req: Request, res: Response) {
        const rows : any = await model.findAll();
    
        res.json(rows);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const row : any = await model.findOne(id);
        
        res.json(row);
    }

    async store(req: Request, res: Response) {
        const row : any = await model.make(req.body);

        res.json(row);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const row : any = await model.update(id, req.body);
    
        res.json(row);
    }

    async destroy(req: Request, res: Response) {
        const { id } = req.params;
        const row : any = await model.delete(id);
        
        res.json(row);
    }
}

export default Controller;