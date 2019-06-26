const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const chalk = require("chalk");
const zlib = require("zlib");
const uglify = require("uglify-js");
const rollup = require("rollup");

const buildTsConf = require("./rollup.conf.js");
const buildDeclareConf = require("./rollup.d.js");

const version = process.env.VERSION || require("../package.json").version;
const resolve = _path => path.resolve(__dirname, "../", _path);
const distPath = resolve("dist/");

const getSize = function(code)
{
    return (code.length / 1024).toFixed(2) + "kb";
};

const write = function(dest, code, zip)
{
    return new Promise((resolve, reject) =>
    {
        function report(extra)
        {
            console.log(chalk.cyan(path.relative(process.cwd(), dest)) + " " + getSize(code) + (extra || ""));

            resolve();
        }

        fs.writeFile(dest, code, (error) =>
        {
            if(error)
            {
                return reject(error);
            }

            if(zip)
            {
                zlib.gzip(code, (error, zipped) =>
                {
                    if(error)
                    {
                        return reject(error);
                    }
                    
                    report(" (gzipped: " + getSize(zipped) + ")");
                })
            }
            else
            {
                report();
            }
        })
    })
};

const buildEntry = async ({input, output}) =>
{
    const bundle = await rollup.rollup(input);
    const result = await bundle.generate(output);
    const { code } = result.output[0];
    let minifyCode = "";

    return write(output.file, minifyCode || code, true);
};

const build = function(builds)
{
    let built = 0;
    const total = builds.length;

    const next = () =>
    {
        buildEntry(builds[built])
        .then(() =>
        {
            built++;

            if(built < total)
            {
                next();
            }
        })
        .catch((error)=>
        {
            // 输出构建错误
            console.log(chalk.red("Build failed with errors.\n", error));
            
            // 退出进程
            process.exit(1);
        });
    }

    next();
};

// 先清空构建目录
rimraf(distPath, (error) =>
{
    if(error)
    {
        throw error;
    }

    // 重新建立构建目录
    fs.mkdirSync("dist");

    // 生成代码 及 声明文件
    build([buildTsConf, buildDeclareConf]);    
});
