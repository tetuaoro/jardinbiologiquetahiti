const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = {
  plugins: [
    purgecss({
      content: [".next/server/pages/index.html"],
      css: [".next/static/css/769dcf0201ef31e1.css"],
    }),
  ],
}
