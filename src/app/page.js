"use client"
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });

  const alunos = await req.json();
 
  return (
    <main className={styles.container}>
      <Link href="/cadastro" className={styles.buttonVoltar}>Voltar</Link>
      <div className={styles.alunosContainer}>
        {alunos.map(aluno => (
          <div key={aluno.id} className={styles.alunoContainer}>
            <p className={styles.nome}>{aluno.nome}</p>
            <p className={styles.curso}>{aluno.curso}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
