const { body, validationResult } = require('express-validator');

module.exports.iniciaChat = function (application, req, res) {
    var dadosForm = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("index", {validacao : errors.array(), dadosForm : dadosForm});
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: 'Acabou de entrar no chat'}
    );

    res.render('chat', {dadosForm: dadosForm});
}