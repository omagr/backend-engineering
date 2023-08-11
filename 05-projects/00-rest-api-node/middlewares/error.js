//- it's just a function 
const handleError = (err, req, res, nxt) => {
    const status = res.statusCode ?? 500;
    res.status(status).json({
        messeage: err.message, stack: process.env.NODE_ENV === 'Development' ? err.stack : null
    })
}

module.exports = handleError;