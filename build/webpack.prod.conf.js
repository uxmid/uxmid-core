const path = require("path");
const resolve = _path => path.resolve(__dirname, "../", _path);

// resolve(dist)

module.exports =
{
    mode: "development",
    // mode: "production",
    entry: path.resolve(__dirname, "../dist/index.js"),
    output:
    {
        path: path.resolve(__dirname, "../dist"),
        filename: "uxmid.js"
    },
    resolve:
    {
        extensions: [".js", ".json", ".ts"]
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    // module:
    // {
    //     rules:
    //     [
    //         {
    //             test: /\.tsx?$/,
    //             loader: "ts-loader",
    //             exclude: /node_modules/,
    //             include: [resolve("src")],
    //             options:
    //             {
    //                 transpileOnly: true,
    //                 experimentalWatchApi: true,
    //             }
    //         },
    //     ]
    // }
};