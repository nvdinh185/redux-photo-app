"use strict"

class UserHandler {

    createToken(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ token: req.token }));
    }

    testGet(req, res, next) {
        if (req.user) {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: "OK", results: req.user }));
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ status: "NOK", error: req.error }));
        }
    }
}

module.exports = new UserHandler();