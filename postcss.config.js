module.exports = {
    plugins: [
        require("postcss-import")(),
        require("postcss-url")(),
        require('postcss-preset-env')({}),
        require("flex-gap-polyfill"),
        require("autoprefixer")({}),//overrideBrowserslist: ["> 0.5% in US", "Safari > 9"]
        require('cssnano')({
            preset: 'advanced',
        }),
    ]
};