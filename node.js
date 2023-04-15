const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
  const bucketName = 'mybucketkarthik345';
  const fileName = 'viswa (1)-2.txt';

  try {
    const s3Response = await s3.getObject({ Bucket: bucketName, Key: fileName }).promise();
    const fileContent = s3Response.Body.toString('utf-8');
    const words = fileContent.split(" ");
    var l=event.lan_data.toUpperCase();
    var t=""
    var y=false
    for(var i=0;i<words.length;i++)
    {
        if(words[i]=="KT" && y==true)
        {
            y=false
            break
        }
        if(y==true)
        t+=words[i]+" ";
        //t+=words[i]+" "
        if(words[i]=="PASUPU")
        {
            if(words[i+1]==l)
            y=true
        }
    }
     console.log(t);
     var response={
         'body':t
     }
     callback(null,response)
  } catch (error) {
    console.error(error);
  }
};
