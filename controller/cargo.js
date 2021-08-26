const Doc = require("../model/doc");

const cargo = {
  async enviarDado(dados) {
    const doc = new Doc(dados);
    await doc.save(function (err) {
      if (err) {
        console.log("Falha ao enviar documento");
      }
    });
  },
};
// 5fbaf0ef669158385852cb92
module.exports = cargo;
