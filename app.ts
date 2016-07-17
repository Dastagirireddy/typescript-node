import * as express from "express";
import * as path from "path";

class Index {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {

    	res.render("index");
    }
}

class Server {
	public app: express.Application;

	constructor(){
		this.app = express();
		this.config();
		this.routes();
	}

	public static bootstrap(): Server {
		return new Server();
	}

	public routes() {
		let router: express.Router;
		router = express.Router();

		//create routes
		var index: Index = new Index();

		//home page
		router.get("/", index.index.bind(index.index));

		//use router middleware
		this.app.use(router);
	}

	public config() {
		this.app.set("views", path.join(__dirname, "views"));
		this.app.set("view engine", "ejs");
	}
}

var server = Server.bootstrap();
export = server.app;