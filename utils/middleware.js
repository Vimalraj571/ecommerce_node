import jwt from 'jsonwebtoken'

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')

    if (authorization && authorization.toString().toLowerCase().startsWith('bearer ')) {
        request.token = authorization.substring(7)
    } else {
        request.token = null
    }
    next()
}

const userExtractor = (request, response, next) => {
    const user = jwt.verify(request.token, process.env.SECRET)
    request.user = user
    next()
}

const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    return next(error)
}

export default {
    unknownEndpoint,
    tokenExtractor,
    userExtractor,
    errorHandler
}