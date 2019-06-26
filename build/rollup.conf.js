const path = require("path");
const commonjs = require("rollup-plugin-commonjs");
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

module.exports = 
{
    input:
    {
        input: path.resolve(__dirname, "../bin/index.js"),
        plugins:
        [
            commonjs()
        ]
    },
    output:
    {
        file: path.resolve(__dirname, "../dist/uxmid.js"),
        name: "uxmid",
        format: "umd",
        banner
    }
};