import mongoose from "mongoose";

const expHistorySchema = new mongoose.Schema({
    expenseId: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    loggedBy: {
        type: String,
        required: true,
    }
},
    { timestamps: true })

const ExpenseHistory = mongoose.model('ExpenseHistory', expHistorySchema);
export default ExpenseHistory;