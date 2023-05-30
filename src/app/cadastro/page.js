'use client'
import { useState } from 'react'
import styles from '../page.module.css'

export default function Cadastro() {
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>Cadastrar:</h2>
            <form action='' onSubmit={cadastrar} className={styles.form}>
                <input
                    placeholder='Digite seu nome...'
                    nome="nome"
                    type="text"
                    required
                    onChange={e => setNome(e.target.value)}
                    className={styles.input}
                />
                <input
                    placeholder='Digite seu curso...'
                    nome="curso"
                    type="text"
                    required
                    onChange={e => setCurso(e.target.value)}
                    className={styles.input}
                />
                <input
                    placeholder='Digite seu RA...'
                    nome="num_inscricao"
                    type="number"
                    required
                    onChange={e => setNum_inscricao(e.target.value)}
                    className={styles.input}
                />
                <button type='submit' className={styles.button}>Cadastra-se</button>
                <a href='/' className={styles.buttonVoltar}>Listar</a>
            </form>
        </div>
    );
}