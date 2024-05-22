import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    expenseId: {
        type: String,
        required: true,
        unique: true,
    },
    purpose: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    invDate: {
        type: Date,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    bill: {
        type: Number,
        required: true,
    },
    claim: {
        type: Number,
        required: true,
    },
    paymethod: {
        type: String,
        required: true,
    },
    projectCode: {
        type: String,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
        unique: false,
    },
    approvalManagerId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending",
    },
},
    { timestamps: true })

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;