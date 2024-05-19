import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    role: {
        type: String,
        // Options can be Employee, Manager, Senior Manager, Director, Senior Director
        // Every user is an employee having their managers except the CEO who does not raise any expense.
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
})

const User = mongoose.model('User', userSchema);
export default User;