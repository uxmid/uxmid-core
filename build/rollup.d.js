const path = require("path");
const dts = require("rollup-plugin-dts")["default"]; // https://github.com/Swatinem/rollup-plugin-dts

module.exports = 
{
    input:
    {
        input: path.resolve(__dirname, "../bin/index.d.ts"),
        plugins: [dts()]
    },
    output: 
    {
        file: path.resolve(__dirname, "../dist/uxmid.d.ts"),
        name: "uxmid",
        format: "es"
    }
};