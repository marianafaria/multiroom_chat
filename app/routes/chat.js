const { body, validationResult } = require('express-validator');

module.exports = function (application) {
    application.get('/chat', function (req, res) {
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}

module.exports = function (application) {
    application.post('/chat',
    body('apelido', 'Nome ou Apelido é obrigatório').notEmpty(),
    body('apelido', 'Nome ou Apelido deve conter entre 3 e 15 caracteres').isLength({ min: 3, max:15 }),
    function (req, res) {
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}