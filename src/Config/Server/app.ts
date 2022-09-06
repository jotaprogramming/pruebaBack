import express, { Application } from 'express';
import { Middleware } from '../Middlewares/middlewares';
import { IServer } from '../../Utils/Interfaces/server.interface';
import Connection from '../../Utils/Database/connection';
import {UsersRoutes} from '../../Routes/users.routes';
import {CommentsRoutes} from '../../Routes/comments.routes';
import {ArticlesRoutes }from '../../Routes/articles.routes';
import { BlockedUsersRoutes } from '../../Routes/blockedUsers.routes';


class Server implements IServer{
    private app : Application;
    private port : string;
    private usersRoutes : any;
    private commentsRoutes : any;
    private articlesRoutes : any;
    private blockedUsersRoutes : any;
    private apiPaths = {
        users: '/api/users',
        comments: '/api/comments',
        articles: '/api/articles',
        blockedUsers: '/api/blockedusers',
    }
    private middleware : Middleware;
    private db = new Connection();

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middleware = new Middleware(this.app);
        this.middleware.middlewares()
        this.usersRoutes = new UsersRoutes().router
        this.commentsRoutes = new CommentsRoutes().router
        this.articlesRoutes = new ArticlesRoutes().router
        this.blockedUsersRoutes = new BlockedUsersRoutes().router
        this.routes();
    }

    dbConnection() {
        try {
            this.db.listen();
        } catch (error : any) {
            throw new Error(error);
        }
    }

    routes(){
        this.app.use(this.apiPaths.users, this.usersRoutes);
        this.app.use(this.apiPaths.comments, this.commentsRoutes);
        this.app.use(this.apiPaths.articles, this.articlesRoutes);
        this.app.use(this.apiPaths.blockedUsers, this.blockedUsersRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }
}

export default Server;