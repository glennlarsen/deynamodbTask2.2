const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const save = async (content) => {
  console.log("saving");
  await s3.putObject({
    Body: JSON.stringify(content, null, 2),
    Bucket: "cyclic-cooperative-sun-hat-bat-eu-west-3",
    Key: "content.json",
  }).promise()
};

module.exports = { save };