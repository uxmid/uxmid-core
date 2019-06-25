import path from "path";
import commonjs from 'rollup-plugin-commonjs';
const version = process.env.VERSION || require("../package.json").version;

const banner =
`/*!
 * uxmid-core v${version} 
 *
 * @Authors:
 *      jason <jasonsoop@gmail.com>
 *      Evan <skcy@vip.qq.com>
 * 
 * @Date:  2019-06-25 16:05:55
 * @version: 1.0.0
 * Licensed under the MIT License.
 * Copyright (C) 2010-${new Date().getFullYear()} Uxmid Inc. All rights reserved. 
 */`;

export default {
    input: path.resolve(__dirname, "../dist/index.js"),
    output:
    {
        file: path.resolve(__dirname, "../dist/uxmid.js"),
        name: "uxmid",
        format: 'umd',
        banner,
        // minify: true // 代码是否压缩
    },
    plugins:
    [
        commonjs()
    ]
};