const Doc = require('../model/doc');

const DocMethods = {
  
  async createDoc(req,res){
    const {name, value } = req.body;
    const doc = new Doc({ name, value});
    
    await doc.save(function(err, doc){
      if(err){
        return res.status(500).send(err)
      }
      res.status(201).json(doc);
    });
  },

  async ListDoc(req, res){
    try {
      const list = await Doc.find();
      return res.status(200).json(list);
    } catch (err) {
      return res.status(500).send({message: err});
    }
  },
}
// 5fbaf0ef669158385852cb92
module.exports = DocMethods;