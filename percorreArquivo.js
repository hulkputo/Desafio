const fs = require("fs");
const Doc = require("./model/doc");

function percorreArquivo() {
  fs.readFile("./data.csv", "utf-8", async function (err, data) {
    var linhas = data.split(/\r?\n/);

    const docs = [];

    linhas.forEach(function (linha, cont) {
      const docInfo = linha.split(",");

      // verifica se existem nomes/valores vazios no arquivo e se algum valor não é um número
      if (
        docInfo[0] !== "" &&
        docInfo[0] !== undefined &&
        (docInfo[1] !== "" || docInfo[1] !== undefined)
      ) {
        if (!isNaN(parseInt(docInfo[1]))) {
          docs.push({
            name: docInfo[0],
            value: docInfo[1],
          });
        }
      }
    });

    const docsJson = await Doc.insertMany(docs);

    console.log(docsJson);
    console.log("\n\nOK");
  });
}

module.exports = percorreArquivo;
