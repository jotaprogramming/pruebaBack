import { Request, Response } from 'express';
import Model from '../Models/users.model';

export class ControllerUsers
{
    public model:any;
    constructor(){
        this.model = new Model('users');
    }
    async index(req:Request, res:Response){
        const users : any = await this.model.findAll();
        res.json(users);
    }
    async show(req:Request, res:Response){
        const { id } = req.params;
        const user : any = await this.model.findOne(id);
        res.json(user); 
    }
    async store(req:Request, res:Response){
        const user = await this.model.make(req.body);
        res.json(user);

    }

    async update(req:Request, res:Response){
        const { id } = req.params;
        const user : any = await this.model.update(id, req.body);
    
        res.json(user);
    }
    async destroy(req:Request, res:Response){
        const { id } = req.params;
        const user : any = await this.model.delete(id);
        
        res.json(user);
    }

}
