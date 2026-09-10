const express = require("express")
const inventarios = require("../dados.json");
const send = require("send");

const mostrarInventario = (req, res) => {
    res.send(inventarios)
}

const excluirInventario = (req, res) => {
    const id = req.params.id;

    inventarios.forEach((inventario, indice) => {
        if (inventario.id == id) {
            inventarios.splice(indice, 1);
        }
    });

    res.send("Item excluido com sucesso");
};

const alterarInventario = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    inventarios.forEach((inventario) => {
        if (inventario.id == id) {
            inventario.item = dados.item;
            inventario.local = dados.local;
            inventario.dataRegistro = dados.dataRegistro;
            inventario.valor = dados.valor;
            inventario.patrimonio = dados.patrimonio;
        }
    });

    res.send("Itens atualizado com sucesso !");
};

const novoInventario = (req, res) => {
    if (req.body) {
        res.send("item recebido, em análise")
        inventarios.push(req.body)
    } else {
        res.send("Erro ao receber pedido")
    }
};

const mostrarInventarioespecifico = (req, res) => {
    const id = req.params.id
    const inventario = inventarios.find((itens) => itens.id == id)

    if (inventario) {
        res.send(inventario)
    }else {
        res.status(404).send("Item não localizado")
    }
}

const app = express()
app.use(express.urlencoded({ extended: true }))
const porta = 3000

app.post("/inventario/:id", novoInventario);
app.get("/inventario", mostrarInventario);
app.delete("/inventario/:id", excluirInventario);
app.get("/inventario/:id", mostrarInventarioespecifico);

app.listen(porta, () => {
    console.log(`Servidor: http://localhost:${porta}`)
})