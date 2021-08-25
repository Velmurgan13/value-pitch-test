const userController = require("../controllers/user-controller");
const router = require("express").Router();

router.post("/create-user", userController.createUser);

router.post("/update-user", userController.updateUser);

router.get("/:_id", userController.getUserById);

router.get("/", userController.getUsers);

module.exports = router;
