import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="soundbox" content="Soundxbox case" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>header test push</h1>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Soundbox index
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>

        </div>
      </main>

      <footer className={styles.footer}>
        <h1>footer</h1>
      </footer>
    </div>
  )
}
