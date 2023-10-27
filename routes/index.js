var express = require("express");
var router = express.Router();
let content = require("../content.json");
const { save } = require("../save_json");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();


router.get("/", async (req, res, next) => {
  let my_file = await s3
  .getObject({
    Bucket: "cyclic-cooperative-sun-hat-bat-eu-west-3",
    Key: "content.json",
  })
  .promise();
const Content = JSON.parse(my_file.Body)?.Content;
console.log("Get: ", Content);
  res.json({
    status: "success",
    result: Content,
  });
});

router.post("/", async (req, res, next) => {
  const { Content } = req.body;
  console.log("Post: ", Content);
  content.Content = Content;
  save(content);
  res.json({
    status: "success",
    result: Content,
  });
});

module.exports = router;
