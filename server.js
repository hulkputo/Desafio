require("dotenv").config();

const percorreArquivo = require("./percorreArquivo");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connected!");
    percorreArquivo();
  })
  .catch((err) => {
    console.log(err);
  });
 
