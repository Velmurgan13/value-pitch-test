const passport = require("passport");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  passport.authenticate("local", { session: false }, (error, user, info) => {
    console.log(error, user, info);
    if (error || !user) {
      return res.status(400).json({
        success: false,
        message: "Error! Invalid request",
      });
    }

    console.log("wfwefwefwefw");

    req.login(user, { session: false }, (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Error! Something went wrong",
        });
      }

      const token = jwt.sign(user, process.env.JWT_SECRET);
      return res.status(200).json({
        success: true,
        message: "Success! Login successful",
        data: {
          token,
        },
      });
    });
  })(req, res);
};

module.exports = { login };
