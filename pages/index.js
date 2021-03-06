import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AndoverHacks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://andover.edu">Phillips Andover Hack Club!</a>
        </h1>
        <h2 className={styles.subtitle}>Read <Link href="/posts/first-post"><a>this page!</a></Link></h2>
      </main>
        <div className={styles.grid}>
        <a href="https://github.com/andoverhacks" className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>Find and join our github organization here!</p>
          </a>

          <a href="https://workshops.hackclub.com" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn the basics of coding at the workshops here!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>


      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          Powered by <a href="https://andover.edu">&nbsp;Andover&nbsp;</a> Hack Club, a 501(c)(3) Non-Profit EIN: 81-2908499.
      </footer>
    </div>
  )
}
