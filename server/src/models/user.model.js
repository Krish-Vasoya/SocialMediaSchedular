const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    accountType: { type: String, enum: ['professional', 'influencer', 'both'], default: null },
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiry: { type: Date },
    zernioProfileId: String,
    avatar: { type: String, default: "" }
}, { timestamps: true });

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;