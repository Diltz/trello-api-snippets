/*
    author @Diltz
*/

const fs = require("fs")
const path = require("path")

var files = fs.readdirSync(__dirname, {encoding: "utf-8"})

files.forEach((value) => {
    let name = value.split(".")[0]
    let extension = value.split(".")[1]

    if (extension === "js" && name !== "index") {
        let executable = require(`${__dirname}/${value}`)
        module.exports[name] = executable
    }
})