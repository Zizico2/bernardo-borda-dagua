const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-url")(),
    // require("flex-gap-polyfill"),
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./themes/**/layouts/**/*.html",
        "./themes/**/archetypes/**/*.html",
        "./layouts/**/*.html",
        "./archetypes/**/*.md",
        "./content/**/*.md",
        "./themes/**/assets/svg/**/*.svg",
        "./assets/svg/**/*.svg",
      ],
      css: ["./themes/**/assets/css/**/*.css", "./assets/css/**/*.css"],
    }),
    require("postcss-preset-env")({ stage: 1 }),
    require("cssnano")({
      preset: "advanced",
    }),
    require("autoprefixer")({}),
  ],
};
