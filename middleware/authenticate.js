module.exports = (req, res, next) => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    //Have this redirect to the landing or login page
    res.send({
      code: 403,
      error: "Please login",
    });
  }
};
