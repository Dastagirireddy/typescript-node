"use strict";
const express = require("express");
const path = require("path");
class Index {
    index(req, res, next) {
        res.render("index");
    }
}
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    routes() {
        let router;
        router = express.Router();
        //create routes
        var index = new Index();
        //home page
        router.get("/", index.index.bind(index.index));
        //use router middleware
        this.app.use(router);
    }
    config() {
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
    }
}
var server = Server.bootstrap();
module.exports = server.app;
