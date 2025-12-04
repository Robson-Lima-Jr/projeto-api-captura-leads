import express from 'express';
import cors from 'cors';
// import pool from './service/conexao.js';
import { retornaUsuarios } from './service/retornaUsuario.js';
import { cadastraUsuario } from './service/cadastraUsuario.js';
import { validaUsuario } from './validation/valida.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = 8080;

app.get('/usuarios', async (req, res) => {
    const listaUsuarios = await retornaUsuarios();

    res.json(listaUsuarios);
});

app.post('/usuarios', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    const usuarioValido = validaUsuario(nome, email, telefone);

    if (usuarioValido.status) {
        await cadastraUsuario(nome, email, telefone);
        res.status(204).end();
    } else {
        res.status(404).send({mensagem: usuarioValido.mensagem});
    }

});

app.listen(port, async () => {
    const data = new Date();
    const dataAtual = data.toLocaleDateString();
    const horaAtual = data.toLocaleTimeString();

    console.log(`Servidor iniciado na porta: ${port}, na data: ${dataAtual} e no horário: ${horaAtual}`);


    //teste de conexao com o banco
    // const conexao = await pool.getConnection();
    // const testarConexao = conexao.threadId;
    // conexao.release();

    // console.log(testarConexao);
})