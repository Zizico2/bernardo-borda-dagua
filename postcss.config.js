const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-preset-env")({ stage: 0 }),
    // require("flex-gap-polyfill"),
    require("autoprefixer")({}),
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./themes/**/layouts/**/*.html",
        "./themes/**/archetypes/**/*.html",
        "./layouts/**/*.html",
        "./archetypes/**/*.md",
        "./content/**/*.md",
      ],
      css: ["./themes/**/assets/css/**/*.css", "./assets/css/**/*.css"],
    }),
    require("cssnano")({
      preset: "advanced",
    }),
  ],
};
