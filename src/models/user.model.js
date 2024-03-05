import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/**
 * User schema for MongoDB.
 * @constant {Schema} userSchema
 */
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
);

/**
 * Middleware function executed before saving a user to hash the password.
 * @function
 * @async
 * @name userSchema.pre
 */
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

/**
 * Method to check if the provided password is correct.
 * @function
 * @async
 * @name userSchema.methods.isPasswordCorrect
 * @param {string} password - The password to check.
 * @returns {boolean} - Returns true if the password is correct, false otherwise.
 */
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

/**
 * Method to generate an access token for the user.
 * @function
 * @name userSchema.methods.generateAccessToken
 * @returns {string} - The generated access token.
 */
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

/**
 * Method to generate a refresh token for the user.
 * @function
 * @name userSchema.methods.generateRefreshToken
 * @returns {string} - The generated refresh token.
 */
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

// Exporting the User model
export const User = mongoose.model("User", userSchema);