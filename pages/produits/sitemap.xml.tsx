import type { Http2ServerResponse } from "http2"

const Sitemap = () => {}

export const getServerSideProps = ({ res }: { res: Http2ServerResponse }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- We'll render the URLs for our sitemap here. -->
    </urlset>
  `

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
