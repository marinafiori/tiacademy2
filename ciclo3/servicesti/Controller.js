const express = require('express');
const cors = require('cors');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let servico = models.Servico;
let pedido = models.Pedido;

app.get('/', function (req, res) {
    res.send('olá mundo');

});

app.post('/clientes', async (req, res) => {
    let create = await cliente.create(
        req.body
    );
    res.send('Novo cliente inserido');
});

app.post('/pedidos', async (req, res) => {
    let create = await pedido.create(
        req.body
    );
    res.send('Novo pedido inserido');
});

app.post('/servicos', async (req, res) => {

 
   await servico.create(
        req.body
    );
    res.send('Serviço foi inserido');

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };
});


app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['nome', 'Desc']]
    }).then(function (servicos) {
        res.json({ servicos })
    });
});

app.get('/ofertas', async (req, res) => {
    await servico.count('id')
        .then(function (servicos) {
            res.json(servicos);
        });
});

app.get('/servico/:id', async (req, res) => {
    servico.findByPk(req.params.id)
        .then(servico => {
            return res.json({
                error: false,
                servico
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: "Codigo não está cadastrado"
            });
        });
});

app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        raw: true
    }).then(function (clientes) {
        res.json({ clientes })
    });
});

app.get('/listaclientesantig', async (req, res) => {
    await cliente.findAll({
        order: [['createdAt']]
    }).then(function (clientes) {
        res.json({ clientes })
    });
});

app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        raw: true
    }).then(function (pedidos) {
        res.json({ pedidos })
    });
});

app.get('/listaordempedidovalor', async (req, res) => {
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });
});

app.get('/quantidadeclientes', async (req, res) => {
    await cliente.count('id')
        .then(function (clientes) {
            res.json(clientes);
        });
});

app.get('/quantidadepedidos', async (req, res) => {
    await pedido.count('id')
        .then(function (pedidos) {
            res.json(pedidos);
        });
});

app.get('/somavalorcliente/:id', async (req, res) => {
    await pedido.sum('valor', { where: { ClienteId: req.params.id } })
        .then(function (pedidos) {
            res.json(pedidos);
        });
});

app.get('/atualizaservico', async (req, res) => {
    await servico.findByPk(1)
        .then(servico => {
            servico.nome = 'Html/css/js';
            servico.descricao = 'paginas estaticas dinamica e estilizadas';
            servico.save();
            return res.json({ servico });
        });
});

app.put('/editarservico', (req, res) => {
    servico.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: 'servico alterado com sucesso'
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "erro na alteraçao do serviço"
        });
    });
});

app.get('/servicospedidos', async (req, res) => {
    await servico.findByPk(1, {
        include: [{ all: true }]
    }).then(servico => {
        return res.json({ servico })
    });
});

app.put('/editarpedidos', (req, res) => {
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            error: true,
            message: "pedido modificado com sucesso"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "não foi possivel modifificar"
        });
    });
});

app.get('/listapedidos/:id', async (req, res) => {
    await pedido.findAll({ where: { ClienteId: [req.params.id] } })
        .then(function (pedidos) {
            res.json(pedidos)
        });
    console.log(pedidos, valor, ClienteId)
});

app.get ('/pedido/:id',async(req,res)=>{
    pedido.findByPk(req.params.id)
    .then(pedido =>{
        return res.json({
            error:false,
            pedido
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"codigo nao esta cadastrado"
        });
    });
});



app.get('/cliente/:id', async (req, res) => {
    cliente.findByPk(req.params.id)
        .then(cliente => {
            return res.json({
                error: false,
                cliente
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: "codigo nao esta cadastrado"
            });
        });
});

app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do pedido."
        });
    });
});

app.get('/clienteexcluir', async (req, res) => {
    cliente.destroy({
        where: { id: 2 }
    });
});

app.delete('/apagarservico/:id', (req, res) => {
    servico.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: 'servico foi excluido com sucesso'
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: 'nao foi possivel excluir o servico'
        });
    });
});
app.delete('/apagarcliente/:id', (req, res) => {
    cliente.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: 'Cliente foi excluido com sucesso'
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: 'nao foi possivel excluir o cliente'
        });
    });
});

app.delete('/apagarpedido/:id', (req, res) => {
    pedido.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: 'Pedido foi excluido com sucesso'
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: 'nao foi possivel excluir o pedido'
        });
    });
});



app.get('/clientepedidos/:id', async (req, res) => {
    await cliente.findByPk(req.params.id, {
        include: [{ all: true }]
    }).then(cliente => {
        return res.json({ cliente })
    });
});


app.put('/editarpedidosporcliente', (req, res) => {
    pedido.update(req.body, {
        where: { ClienteId: req.body.ClienteId }
    }).then(function () {
        return res.json({
            error: true,
            message: "pedido modificado com sucesso"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "nao foi possivel modificar"
        });
    });
});




app.get('/servicos', function (req, res) {
    res.send('lista dos servicos');
});
app.get('/pedidos', function (req, res) {
    res.send('lista dos pedidos');
});
app.get('/clientes', function (req, res) {
    res.send('lista do cliente');
});


let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo');
});