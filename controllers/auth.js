const jwt = require('../services/jwt');
const moment = require('moment');
const User = require('../models/user');

function willExpireToken(token) {
    const {exp} = jwt.decodeToken(token);
    const currentDate = moment().unix();

    if(currentDate > exp){
        return true;
    }
    return false;
}

function refreshAccessToken(req, res) {
    const { refreshToken } = req.body;
    
}

module.exports = {
    refreshAccessToken
};