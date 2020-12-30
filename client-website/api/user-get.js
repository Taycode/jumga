const requireAuth = require("./_require-auth.js");

exports.handler = requireAuth((event, context, callback) => {
  const authUser = event.user;
  const { uid } = event.queryStringParameters;

  // Prevent access to user other than yourself
  // Note: You may want to remove this depending on your needs
  if (uid !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot access user other than yourself",
      }),
    });
  }

  // Fetch user from database here
  // For now we'll just return a fake user
  const user = {
    uid: uid,
    email: "fake-user@gmail.com",
    name: "Bob",
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: user,
    }),
  });
});
