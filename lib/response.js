module.exports = class Response {
    static make(success = false, message = null, data = null) {
        return {
            success: success,
            message: message,
            data: data,
        };
    }
};
