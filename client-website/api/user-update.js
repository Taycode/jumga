const requireAuth = require("./_require-auth.js");

exports.handler = requireAuth((event, context, callback) => {
  const authUser = event.user;
  const body = JSON.parse(event.body);
  const { uid } = event.queryStringParameters;

  // Make sure authenticated user can only update themself
  if (uid !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot update user other than yourself",
      }),
    });
  }

  // Update user in database here
  // For now we'll return a fake user containing data we passed in request
  const user = {
    uid: uid,
    ...body,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: user,
    }),
  });
});
