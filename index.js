import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = 8080;

app.listen(port, async ()=> {
    const data = new Date();
    const dataAtual = data.toLocaleDateString();
    const horaAtual = data.toLocaleTimeString();

    console.log(`Servidor iniciado na porta: ${port}, na data: ${dataAtual} e no horário: ${horaAtual}`);
    
})