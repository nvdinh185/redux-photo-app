"use strict"

class UserHandler {

    createToken(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ token: req.token }));
    }

    testGet(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: "OK" }));
    }
}

module.exports = new UserHandler();