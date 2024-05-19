import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from "dotenv"

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'somesuperhardstring';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist." });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials." });
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(200).json({ message: "Error Logging In because of ", error });
    }
}

export const register = async (req,res) => {
    const { email, password, name } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, role: 'Employee', name });
        await newUser.save();
        const user = await User.findOne({ email });
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(200).json({ message: "Error Registering because of ", error });
    }
}