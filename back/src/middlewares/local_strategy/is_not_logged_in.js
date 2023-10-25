function is_not_logged_in(req, res, next) {
  if (!req.isAuthenticated()) {
    next(); // 로그인 안되어있으면 다음 미들웨어
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/`).send(message);
  }
}

export { is_not_logged_in };