import express, { Application } from 'express';
import morgan from 'morgan';
import { IServer } from '../../Utils/Interfaces/server.interface';
import Connection from '../../Utils/Database/connection';
import UserRoutes from '../../Routes/users.routes';
import cors from 'cors';

class Server implements IServer{
    private app : Application;
    private port : string;
    private apiPaths = {
        users: '/api/users'
    }
    private db = new Connection();

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }
    
    dbConnection() {
        try {
            this.db.listen();
        } catch (error : any) {
            throw new Error(error);
        }
    }

    routes(){
        this.app.use(this.apiPaths.users, UserRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });       
    }
}

export default Server;