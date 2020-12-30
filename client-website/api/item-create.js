const requireAuth = require("./_require-auth.js");

exports.handler = requireAuth((event, context, callback) => {
  const authUser = event.user;
  const body = JSON.parse(event.body);

  // Make sure authenticated user is not setting someone else as the owner
  if (body.owner !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "You can only set yourself as the item owner",
      }),
    });
  }

  // Create item in database here
  // For now we'll return a fake item containing data we passed in request
  const item = body;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: item,
    }),
  });
});
