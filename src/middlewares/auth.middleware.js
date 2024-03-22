import { ApiError } from "../utils/ApiError";
import { AsyncHandler } from "../utils/asyncHandler";
import JWt from  'jsonwebtoken';

export const verifyJWT = AsyncHandler(async (req, res, next) => {
  try {
    const token =
      (await req.cookies?.acessToken) ||
      req.header("Authorization")?.replace("Bearer ", "");
      const decodedToken=JWt.verify(token,process.env.ACCESS_TOKEN_SECRET);
      const user= await  User.findById(decodedToken._id).select("-password -refreshToken");
      if(!user){
        throw new ApiError(401, "Invalid Access Token")
      }
      req.user=user;
      next();
      
  } catch (error) {
    throw new ApiError(401, "Auth token is not valid");
  }
});
