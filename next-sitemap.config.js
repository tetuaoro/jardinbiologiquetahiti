/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://jblt.rao-nagos.pf",
  generateRobotsTxt: true,
  changefreq: "monthly",
  transform: async (_config, path) => {
    const n = path.split("/").filter((f) => f.length > 0)
    return {
      loc: path,
      priority: 1 - n.length * 0.1,
      lastmod: new Date().toISOString(),
    }
  },
}

module.exports = config
