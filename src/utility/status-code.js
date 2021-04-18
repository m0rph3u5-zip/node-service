function badRequest(response, message) {
    return response.status(400).json({ status: 400, message: message })
}

function notFound(response, message) {
    return response.status(404).json({ status: 400, message: message })
}

function internalServerError(response, e) {
    return response.status(404).json({ status: 500, message: e.message })
}

function noContent(response) {
    return response.status(200).json({ status: 200, message: 'Ok' })
}

module.exports = {
    badRequest: badRequest,
    notFound: notFound,
    internalServerError: internalServerError,
    noContent: noContent
}