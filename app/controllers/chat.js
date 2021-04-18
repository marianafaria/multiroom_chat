const { body, validationResult } = require('express-validator');

module.exports.iniciaChat = function (application, req, res) {
    var dadosForm = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("index", {validacao : errors.array(), dadosForm : dadosForm});
        return;
    }

    res.render('chat');
}