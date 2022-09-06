import { Request, Response } from 'express';
import Model from '../Models/users.model';

const model = new Model('users');

export const index = async (req: Request, res: Response) => {
    const users : any = await model.findAll();

    res.json(users);
}
export const show = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user : any = await model.findOne(id);
    
    res.json(user);
}
export const store = async (req: Request, res: Response) => {
    const user : any = await model.make(req.body);

    res.json(user);
}
export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user : any = await model.update(id, req.body);
    
    res.json(user);
}
export const destroy = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user : any = await model.delete(id);
    
    res.json(user);
}