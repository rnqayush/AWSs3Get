const AWS = require('aws-sdk');
const env = require('./s3.env.js');
 
const s3Client = new AWS.S3({
    accessKeyId: env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
	region : env.REGION
});
 


const s3 = {};
s3.s3Client = s3Client;

 
module.exports = s3;