const router = require('express').Router();

const postHandler = require('../utils/post-handler');

const userHandler = require('../handlers/user-handler');
const tokenHandler = require('../handlers/token-handler');

router.post('/create-token'
    , postHandler.jsonProcess       //req.json_data
    , tokenHandler.requestNewToken
    , userHandler.createToken
);

router.get('/test-get'
    , tokenHandler.getToken
    , tokenHandler.verify
    , userHandler.testGet
);

module.exports = router;