const path = require("path");
const webpack = require("webpack");
const resolve = function(dir)
{
    return path.join(__dirname, ".", dir);
};

module.exports =
{
    mode: "development",
    module:
    {
        rules:
        [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                include: [resolve("test")],
                options:
                {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                }
            }
        ]
    },
    resolve: 
    {
        extensions: [".ts", ".js"],
        alias: 
        {
            "dist": resolve("../../dist")
        }
    },
    plugins: 
    [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin
        ({
            "process.env":
            {
                NODE_ENV: '"testing"'
            }
        })
    ]
};