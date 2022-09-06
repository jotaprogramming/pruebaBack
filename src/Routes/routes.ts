import { Router } from 'express';
export class Route{
    protected _router : Router = Router();
    protected _controller : any;
    constructor(controller: any) {
        this._controller = controller;
    }

    index(){
        this._router.get('/', this._controller.index)
    }

    show(){
        this._router.get('/:id', this._controller.show)
    }

    store(){
        this._router.get('/:add', this._controller.store)
    }

    update(){
        this._router.get('/:id', this._controller.update)
    }

    destroy(){
        this._router.get('/:id', this._controller.destroy)
    }
}
