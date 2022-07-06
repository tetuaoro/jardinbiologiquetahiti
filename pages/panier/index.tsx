import type { NextPage } from "next"
import Head from "next/head"
import { sitename } from "@utils/global"

const title = "Panier | " + sitename

const CARTS: NextPage = () => {
  return (
    <main className="container pt-3 pt-sm-5">
      <Head>
        <title>{title}</title>
      </Head>
      <section>
        <h1>{title}</h1>
        <p>Mon panier</p>
      </section>
    </main>
  )
}

export default CARTS
