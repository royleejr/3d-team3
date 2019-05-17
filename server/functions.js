function getToken(req) {
  if (!req.headers.authorization) {
    return null;
  }

  const authorizationSplit = req.headers.authorization.split(" ");

  return authorizationSplit ? authorizationSplit[1] : null;
}

module.exports = {
  getToken
};
