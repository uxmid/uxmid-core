const path = require("path");

export default {
    input: path.resolve(__dirname, "../dist/index.js"),
    output:
    {
        file: path.resolve(__dirname, "../dist/uxmid.js"),
        name: "uxmid",
        format: 'cjs'
    }
};