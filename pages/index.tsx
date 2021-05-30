import Head from 'next/head'
import { Header } from '../src/_components/organisms'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="soundbox" content="Soundxbox case" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <h1>
          Soundbox index
        </h1>
      </main>
    </div>
  )
}
