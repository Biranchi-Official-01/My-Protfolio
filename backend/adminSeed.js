import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { User } from "./models/userSchema.js";

dotenv.config({ path: "./.env" });

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database Connected...");

    const existingUser = await User.findOne({ email: "biranchinarayanpanda52@gmail.com" });
    if (existingUser) {
      console.log("⚠️ Admin already exists!");
      process.exit();
    }

    await User.create({
      fullName: "Biranchi Narayan Panda",
      email: "biranchinarayanpanda52@gmail.com",
      password: "Manshi@143",
      phone: "8114844473",
      aboutMe: "Full Stack Developer | MERN | UI/UX",
      portfolioURL: "https://your-portfolio.com",
      avatar: { public_id: "dummy", url: "https://placehold.co/400" },
      resume: { public_id: "dummy", url: "https://placehold.co/400" },
      role: "admin",
    });
    console.log("🎉 Admin Created! Login now.");
    process.exit();
  } catch (error) {
    console.log("❌ Error:", error.message);
    process.exit(1);
  }
};
seedAdmin();