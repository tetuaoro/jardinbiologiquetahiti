import type { NextPage } from "next"
import Head from "next/head"
import { sitename } from "@utils/global"

const title = sitename
const description = "Production locale de fruits et légumes sains, durables et bio à Tahiti."

const Home: NextPage = () => {
  return (
    <main className="container">
      <Head>
        <meta name="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <section>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </main>
  )
}

export default Home
