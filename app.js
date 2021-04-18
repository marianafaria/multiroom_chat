var app = require('./config/server');

var server = app.listen(33, function() {
    console.log('Sucesso');
});

const io = require('socket.io')(server);

app.set('io', io);

io.on('connection', function(socket) {
    console.log('Usuário Conectou');
    
    socket.on('disconnect', function() {
        console.log('Usuário Desconectou');
    });
    
    socket.on('msgParaServidor', function(data){
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem});
        
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem});

        if (parseInt(data.apelido_atualizado_cliente) == 0) {
            socket.emit(
                'participantesParaCliente',
                {apelido: data.apelido});
            
            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido: data.apelido});
        }
    });
});