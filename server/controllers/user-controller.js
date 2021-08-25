const User = require("../models/User");
const { ObjectId } = require("mongodb");

const createUser = async (req, res) => {
  try {
    validateCreateUserRequest(req.body);

    const {
      firstName,
      lastName,
      email,
      address,
      country,
      avatar,
      dateOfBirth,
    } = req.body;

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      res.status(400).json({
        success: false,
        message: "Error! User with this email address already exists",
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      address,
      country,
      avatar,
      dateOfBirth: new Date(dateOfBirth),
    });

    return res.status(201).json({
      success: true,
      message: "Success! User created",
      data: {
        _id: user._id,
        ...req.body,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Error",
      error: error || undefined,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    validateUpdateUserRequest(req.body);

    const {
      _id,
      firstName,
      lastName,
      email,
      address,
      country,
      avatar,
      dateOfBirth,
    } = req.body;

    const response = await User.updateOne(
      { _id: ObjectId(_id) },
      {
        firstName,
        lastName,
        email,
        address: address,
        country: country,
        avatar: avatar,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
      }
    );

    if (response.n === 1) {
      res.status(200).json({
        success: true,
        message: "Success! User has been successfully updated",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Error! User not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Error",
      error: error || undefined,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(ObjectId(req.params._id));

    if (user) {
      return res.status(200).json({
        success: true,
        message: "Success!",
        data: user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Error! User not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Error",
      error: error || undefined,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Success!",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message || "Error",
      error: error || undefined,
    });
  }
};

function validateCreateUserRequest(data) {
  if (!data.firstName) {
    throw new Error("Error! First name is required");
  }

  if (!data.lastName) {
    throw new Error("Error! Last name is required");
  }

  if (!data.email) {
    throw new Error("Error! Email is required");
  }

  return true;
}

function validateUpdateUserRequest(data) {
  try {
    validateCreateUserRequest(data);

    if (!data._id) {
      throw new Error("Error! Invalid request");
    }

    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUser, updateUser, getUserById, getUsers };
