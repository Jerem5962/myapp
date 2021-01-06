exports.loggerDateUrl = (req) => {
    return console.log(    
        '\n' + 'Date actuelle: ' + Date.now() + '\n',
        'URL: ' + req.baseUrl + req.url+ '\n',
        'Méthod: ' + req.method + '\n'
        )
}
