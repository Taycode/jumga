exports.handler = (event, context, callback) => {
  const { owner } = event.queryStringParameters;

  // Fetch items by owner from database here
  // For now we'll return an array of fake items
  const items = [
    {
      id: "1",
      owner: owner,
      name: "Fake Item 1",
    },
    {
      id: "2",
      owner: owner,
      name: "Fake Item 2",
    },
  ];

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: items,
    }),
  });
};
