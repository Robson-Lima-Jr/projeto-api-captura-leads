"use client";
import styles from './Formulario.module.css';
import axios from 'axios';
import { useState } from 'react';

export default async function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState(false);

    function limpaCampos() {
        setNome("");
        setEmail("");
        setTelefone("");
    }

    async function handleCadastraUsuario(event) {
        event.preventDefault();
    }

    const endpoit = "http://localhost:8080/usuarios";

    try {
        await axios.post(endpoit, {
            nome,
            email,
            telefone
        });

        limpaCampos();
        setMensagem("Usuário cadastrado com sucesso!");
        setErro(false);

    } catch (error) {
        const mensagemErro = error.response?.data.mensagem || "Erro ao cadastrar usuário";

        setMensagem(mensagemErro);
        setErro(true)
    }

    return (
        <div className={styles.container_formulario}>
            <h2>Cadastro de Usuário</h2>

            <form onSubmit={handleCadastraUsuario} className={styles.form_config}>
                <input
                    type='text'
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type='text'
                    placeholder='Telefone'
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                />

                <button type="submit">Cadastrar</button>

                {mensagem &&  (
                    <div className={styles.container_mensagem}>
                        <p className={erro ? styles.erro : styles.sucesso}>
                            {mensagem}
                        </p>
                    </div>
                )}
            </form>
        </div>
    )
}