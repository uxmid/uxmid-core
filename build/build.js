const ora = require("ora");
const rm = require("rimraf");
const path = require("path");
const chalk = require("chalk");
const webpack = require("webpack");
const webpackConfig = require("./webpack.prod.conf");
const version = process.env.VERSION || require("../package.json").version;

const spinner = ora(`/*!
* uxmid-core v${version} 
* 
* Authors:
*      jason <jasonsoop@gmail.com>
* 
* Licensed under the MIT License.
* Copyright (C) 2010-${new Date().getFullYear()} Uxmid Inc. All rights reserved. 
*/`);
spinner.start();

rm(path.join("./dist/d/"), error =>
{
    if(error)
    {
        throw error;
    }

    webpack(webpackConfig, (error, stats) =>
    {
        spinner.stop();

        if(error)
        {
            throw error;
        }
        
        process.stdout.write(stats.toString
        ({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + "\n\n");
        
        if(stats.hasErrors())
        {
            console.log(chalk.red("  Build failed with errors.\n"));

            process.exit(1);
        }
        
        console.log(chalk.cyan("  Build complete.\n"));
    })
})
