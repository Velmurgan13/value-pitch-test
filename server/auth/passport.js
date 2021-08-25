const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const ADMIN_CREDS = {
  email: "admin@valuepitch.com",
  password: "valuepitch",
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, cb) {
      if (email === ADMIN_CREDS.email && password === ADMIN_CREDS.password) {
        return cb(
          null,
          {
            username: "admin",
            email: ADMIN_CREDS.email,
          },
          { message: "Logged In Successfully" }
        );
      } else {
        return cb("Invalid credentials");
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, cb) {
      if (jwtPayload.email === ADMIN_CREDS.email) {
        return cb(null, {
          ...jwtPayload,
        });
      } else {
        return cb("Invalid token");
      }
    }
  )
);

module.exports = passport;
