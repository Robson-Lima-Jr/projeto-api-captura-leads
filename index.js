import express from 'express';
import cors from 'cors';
// import pool from './service/conexao.js';
import { retornaUsuarios } from './service/retornaUsuario.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = 8080;

app.get('/usuarios', async (req,res)=> {
    const listaUsuarios = await retornaUsuarios();

    res.json(listaUsuarios);
})

app.listen(port, async ()=> {
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