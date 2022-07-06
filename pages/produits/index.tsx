import type { NextPage } from "next"
import Head from "next/head"
import { sitename } from "@utils/global"

const title = "Nos produits | " + sitename
const description = "Découvrez tous nos produits locaux de fruits et légumes sains, durables et bio du fa'apu."

const PRODUCTS: NextPage = () => {
  return (
    <main className="container pt-3 pt-sm-5">
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

export default PRODUCTS
