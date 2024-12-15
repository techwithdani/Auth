const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 16,
        },
    },
    { timestamps: true }
);

const userData = mongoose.model("userData", userSchema);

module.exports = userData;
