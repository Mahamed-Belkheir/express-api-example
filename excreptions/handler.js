function ExpressErrorHandler(err, req, res, next) {
    res.status(err.code || 500).send({
        status: "error",
        code: err.code,
        message: err.message
    });
}

module.exports = ExpressErrorHandler