const jwt = require("jsonwebtoken");
const Response = require("../lib/response");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (err) {
        return res
            .status(401)
            .json(
                Response.make(false, "Unauthorize or Token is Expired", null)
            );
    }
};
