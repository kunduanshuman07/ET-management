import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    },
    approvalManagerId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending",
    },
})

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;