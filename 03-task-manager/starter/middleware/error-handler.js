const { CustomAPIError } = require('../errors/custom-error')

const errorHandlresMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }

    return res.status(500).json({ msg: 'Ups... try again' })
}

module.exports = errorHandlresMiddleware
