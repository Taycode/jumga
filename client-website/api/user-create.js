const requireAuth = require("./_require-auth.js");

exports.handler = requireAuth((event, context, callback) => {
  const authUser = event.user;
  const body = JSON.parse(event.body);

  // Make sure authenticated user can only create themself in the database
  if (body.uid !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Created user must have the same uid as authenticated user",
      }),
    });
  }

  // Create user in database here
  // For now we'll return a fake user containing data we passed in request
  const user = body;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: user,
    }),
  });
});
