#!/usr/bin/env node
"use strict";
const app = require("../app");
const http = require("http");
const debug = require("debug");
class Www {
    constructor() {
        this.port = 8080;
        this.debug = debug("express:server");
    }
    static bootstrap() {
        return new Www();
    }
    init() {
        this.app.set("port", port);
        this.server = http.createServer(app);
        this.listener();
        this.errorHandler();
    }
    listener() {
        this.server.listen(port);
    }
    errorHandler() {
        this.server.on("error", onError);
        this.server.on("listening", onListening);
        function onError(error) {
            if (error.syscall !== "listen") {
                throw error;
            }
            // handle specific listen errors with friendly messages
            switch (error.code) {
                case "EACCES":
                    console.error(this.port + " requires elevated privileges");
                    process.exit(1);
                    break;
                case "EADDRINUSE":
                    console.error(this.port + " is already in use");
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        }
        function onListening() {
            this.debug("Listening on " + this.port);
        }
    }
}
Www.bootstrap();
