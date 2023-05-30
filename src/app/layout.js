import styles from './page.module.css'

export const metadata = {
  title: 'Projeto aula',
  description: 'Simulando consumo de api com JsonServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={styles.body}>
        {children}</body>
    </html>
  )
}