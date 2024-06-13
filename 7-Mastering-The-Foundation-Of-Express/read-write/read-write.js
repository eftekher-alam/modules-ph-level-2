const fs = require("fs");

let text = "";
fs.readFile("./read.txt", "utf-8", (err, data) => {
    if (err)
        throw Error("Failed to read text");
    text += data;
    console.log(data);
})

fs.writeFile("./write.txt", "Hello world", (err) => {
    if (err)
        throw Error("Failed to write text");
    console.log("File written successfully");
})
