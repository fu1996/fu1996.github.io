const fs = require("fs");
const path = require("path");

// node 读取指定目录的md结尾的文件，并将内容 "](/" 替换为 ”](./${当前文件名}/“ 的处理

const directoryPath = "./react/ssr"; // 指定目录

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log("Error:", err);
    return;
  }

  // 过滤出以`.md`结尾的文件
  const mdFiles = files.filter((file) => path.extname(file) === ".md");

  // 遍历所有以`.md`结尾的文件
  mdFiles.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    // 读取文件内容
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error:", err);
        return;
      }

      // 将文件内容中的`"](/"`替换为`"](./${当前文件名}/"`
      const targetName = file.replace(".md", "");
      const replacedData = data
        .replace(/\]\(\//g, `](./${targetName}/`)
        .replace(`typora-root-url: ./${targetName}`, "");

      // 保存替换后的文件内容
      fs.writeFile(filePath, replacedData, "utf8", (err) => {
        if (err) {
          console.log("Error:", err);
          return;
        }

        console.log(`File ${file} processed successfully!`);
      });
    });
  });
});
