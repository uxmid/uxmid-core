import path from "path";
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: path.resolve(__dirname, "../dist/index.js"),
    output:
    {
        file: path.resolve(__dirname, "../dist/uxmid.js"),
        name: "uxmid",
        format: 'umd',
        minify: true // 代码是否压缩
    },
    plugins:
    [
        commonjs()
    ]
};