const notFound = (req,res,next) => {
    const error = new Error('Requested page not found!');
    res.status(404);
    next(error);
};

const general = (error, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: error.message
    })
};

module.exports = {
    notFound,
    general,
};