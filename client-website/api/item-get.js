exports.handler = (event, context, callback) => {
  const { id } = event.queryStringParameters;

  // Fetch item from database here
  // For now we'll just return a fake item
  const item = {
    id: id,
    name: "Fake Item",
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: item,
    }),
  });
};
