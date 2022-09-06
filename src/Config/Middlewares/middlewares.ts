import morgan from 'morgan';
import cors from 'cors';
import express from 'express';

export class Middleware{
    protected _app:any;
    constructor(app:any){
        this._app = app;
    }
    middlewares(){
        this._app.use(cors());
        this._app.use(express.json());
        this._app.use(morgan('dev'));
    }
}