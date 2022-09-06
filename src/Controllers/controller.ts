import { Request, Response } from 'express';
export class Controller{
    private _modelo: any;
    constructor(modelo : any){
        this._modelo = modelo;
    }
    find = async(req: Request, res: Response) => {
        const users : any = await this._modelo.findAll();

        res.json(users);
    }

    findOne = async(req: Request, res: Response) =>{
        const { id } = req.params;
        const user : any = await this._modelo.findOne(id);
        res.json(user);
    }

    store = async(req: Request, res: Response) => {
        const user : any = await this._modelo.make(req.body);
        res.json(user);
    }

    update = async(req: Request, res: Response) => {
        const { id } = req.params;
        const user : any = await this._modelo.update(id, req.body);
        res.json(user);
    }

    delete = async(req: Request, res: Response) => {
        const { id } = req.params;
        const user : any = await this._modelo.delete(id);
        res.json(user);
    }
}