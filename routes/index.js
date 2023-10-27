var express = require("express");
var router = express.Router();
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB(process.env.CYCLIC_DB)
let text = db.collection('text')


router.get("/", async (req, res, next) => {
  let list = await text.list();
  res.send(list);
});

router.post("/", async (req, res, next) => {
  const {content } = req.body;
  await text.set(content)
  res.end();
});

module.exports = router;
