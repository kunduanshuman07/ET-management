import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    employeeCode: {
        type: String,
        required: true,
        unique: true,
    },
    entity: {
        type: String,
        default: '$',
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
    managerId: {
        type: String,
        required: true,
    },
    projectCode: {
        type: String,
        required: true,
    },
    role: {
        type: String, 
        default: "Employee",
    }
})

const User = mongoose.model('User', userSchema);
export default User;