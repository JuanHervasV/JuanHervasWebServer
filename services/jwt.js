const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "sE5s8w1d3235d2s5wRs4CwxvdKXmsXzcq19jh"

exports.createAccessToken = function(user){
    const payLoad = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    };
    return jwt.encode(payLoad, SECRET_KEY);
};

exports.createRefreshToken = function(user){
    const payload = {
        id: user._id,
        exp: moment().add(30, "days").unix()
    }

    return jwt.encode(payload, SECRET_KEY);
};


exports.decodeToken = function(token) {
    return jwt.decode(token, SECRET_KEY, true);
}