var stream = require('stream');
const env = require('../config/s3.env');
const AWS = require('aws-sdk');
AWS.config.update({ accessKeyId: '', secretAccessKey: '', region: 'us-east-1', signatureVersion: 'v4', })
const s3 = new AWS.S3()




var param = {
	Bucket: env.Bucket,
}





s3.listObjectsV2(param, async function (err, data) {
	if (err) throw err;
	console.log(data);
	let images = []
	for (let item of data.Contents) {
		

		  try {
			let params = {
				Bucket: env.Bucket,
				Key: item.Key,
				Expires: 60 * 5
			  };
			const url = await new Promise((resolve, reject) => {
			  s3.getSignedUrl('getObject', params, (err, url) => {
				err ? reject(err) : resolve(url);
			  });
			});
			console.log(url)
		  } catch (err) {
			if (err) {
			  console.log(err)
			}
		  }
		
	}
	console.log(images);
});



