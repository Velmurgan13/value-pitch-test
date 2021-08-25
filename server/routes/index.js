const router = require("express").Router();
const passport = require("../auth/passport");
const userRoutes = require("./users");
const authRoutes = require("./auth");

router.use(
  "/users",
  passport.authenticate("jwt", { session: false }),
  userRoutes
);

router.use(authRoutes);

module.exports = router;
