function sessionChecker(req, res, next) {
  if (!req.session.user) {
    res.redirect('/')
  }
  else {
    next()
  }
}

function cookieCleaner(req, res, next) {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid')
  }
  next()
}

module.exports = { sessionChecker, cookieCleaner }
