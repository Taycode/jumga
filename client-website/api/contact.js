const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  region: "us-west-2",
});

// Load AWS SES
const ses = new aws.SES({ apiVersion: "2010-12-01" });

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const params = {
    Source: process.env.AMAZON_SES_CONTACT_EMAIL,
    Destination: { ToAddresses: [process.env.AMAZON_SES_CONTACT_EMAIL] },
    Message: {
      Subject: {
        Data: `Contact form submission`,
      },
      Body: {
        Text: {
          Data: `
                    Name: ${body.name}\n
                    Email: ${body.email}\n
                    Message: ${body.message}\n
                  `,
        },
      },
    },
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ status: "success" }),
      });
    })
    .catch((error) => {
      console.log("contact error", error);

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ status: "error" }),
      });
    });
};
