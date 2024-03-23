import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import JWt from  'jsonwebtoken';
import { User } from "../models/user.model.js";

export const verifyJWT = AsyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
      // console.log("Verifying Token:", token);
      const decodedToken=JWt.verify(token,process.env.ACCESS_TOKEN_SECRET);
      // console.log("decoded   "  , decodedToken);
      // console.log("decoded id  "  , decodedToken._id);
      const user= await  User.findById(decodedToken._id).select("-password -refreshToken");
      if(!user){
        throw new ApiError(401, "Invalid Access Token")
      }
      // console.log('====================================');
      // console.log(user);
      // console.log('====================================');
      req.user=user;
      // console.log('====================================');
      // console.log("recbshfk useer",req.user);
      // console.log('====================================');
      next();
      
  } catch (error) {
    throw new ApiError(401, "Auth token is not valid");
  }
});
