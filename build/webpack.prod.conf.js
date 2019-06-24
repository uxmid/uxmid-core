const path = require("path");
const DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin");
const resolve = _path => path.resolve(__dirname, "../", _path);

module.exports =
{
    mode: "production",
    entry: path.resolve(__dirname, "../src/index.ts"),
    output:
    {
        path: path.resolve(__dirname, "../dist"),
        filename: "uxmid.js"
    },
    resolve:
    {
        extensions: [".js", ".json", ".ts"]
    },
    module:
    {
        rules:
        [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                include: [resolve("src"), resolve("test")]
            },
        ]
    },
    plugins: [
        new DeclarationBundlerPlugin({
            moduleName: 'uxmid',
            out:'./builds/bundle.d.ts',
        })
    ]
};