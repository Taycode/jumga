const requireAuth = require("./_require-auth.js");

exports.handler = requireAuth((event, context, callback) => {
  const authUser = event.user;
  const body = JSON.parse(event.body);
  const { id } = event.queryStringParameters;

  // First fetch item from database here
  // For now we'll hard-code the item
  const fetchedItem = {
    id: id,
    owner: authUser.uid,
    name: "Fake Item",
    // Or uncomment this line so owner is different then logged in user.
    // This will cause the request to fail due to owner check farther below.
    // owner: '12345',
  };

  // Make sure authenticated user is the item owner
  if (fetchedItem.owner !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot update an item that you don't own",
      }),
    });
  }

  // Update item in database here
  // For now we'll return a fake item containing data we passed in request
  const item = {
    id: id,
    ...body,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: item,
    }),
  });
});
