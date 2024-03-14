import { AsyncHandler } from "./../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = AsyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;
  //  console.log('email: ',email);
  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }


  const existedUser= User.findOne({$or:[{username}, {email}]})






});

export { registerUser };
