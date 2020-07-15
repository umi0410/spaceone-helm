const fs = require("fs")

// S3_BUCKET_NAME = "helm.stargate.spaceone.dev-bucket"
// ALTERNATIVE_HOST = "helm.stargate.spaceone.dev"
S3_BUCKET_NAME = process.env.S3_BUCKET_NAME
ALTERNATIVE_ENDPOINT = process.env.ALTERNATIVE_ENDPOINT
let index = fs.readFileSync("index.yaml", "utf-8")
console.log(index)

let reg = new RegExp("- s3://"+S3_BUCKET_NAME, "gi")
index = index.replace(reg, `- https://${ALTERNATIVE_HOST}`)
console.log(index)

fs.writeFileSync("index.yaml", index)