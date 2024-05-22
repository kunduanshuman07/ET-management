import Expense from "../models/expense.model.js";
import ExpenseHistory from "../models/exphistory.model.js"
import { customAlphabet } from "nanoid";
export const addNewExpense = async (req, res) => {
    const alphabet = '0123456789';
    const generateUnique5DigitNumber = customAlphabet(alphabet, 5);
    const uniqueNumber = `expenseId-${generateUnique5DigitNumber()}`;
    const { name, purpose, category, invDate, currency, bill, claim, paymethod, projectCode, employeeId, approvalManagerId, employeeName } = req.body;
    try {
        const expense = new Expense({ name, purpose, category, invDate, currency, bill, claim, paymethod, projectCode, employeeId, approvalManagerId, expenseId: uniqueNumber, stage: 2, employeeName });
        const expHistory = new ExpenseHistory({expenseId: uniqueNumber, activity: "Expense Created", loggedBy: employeeName});
        await expense.save();
        await expHistory.save();
        res.status(200).json({ message: "Expense Added Successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error adding a new expense.", error });
    }
}

export const fetchAllExpenses = async (req, res) => {
    const { employeeId } = req.body;
    try {
        const allExpenses = await Expense.find({ employeeId: employeeId });
        res.status(200).json({ allExpenses });
    } catch (error) {
        res.status(500).json({ message: "Error fetching expenses.", error });
    }
}

export const fetchTeamExpenses = async (req, res) => {
    const { employeeId } = req.body;
    try {
        const allExpenses = await Expense.find({ approvalManagerId: employeeId });
        res.status(200).json({ allExpenses });
    } catch (error) {
        res.status(500).json({ message: "Error fetching Team Expenses.", error });
    }
}

export const fetchExpenseDetail = async (req, res) => {
    const { expenseId } = req.body;
    try {
        const expenseDetail = await Expense.find({ expenseId: expenseId });
        const expenseHistory = await ExpenseHistory.find({expenseId: expenseId});
        res.status(200).json({ expenseDetail, expenseHistory });
    } catch (error) {
        res.status(500).json({ message: "Error fetching expense details.", error })
    }
}

export const approveExpense = async (req, res) => {
    const { expenseId, employeeName } = req.body;
    try {
        const updateFields = {};
        updateFields.status="Approved";
        updateFields.stage=3;
        const expense = await Expense.findOneAndUpdate(
            { expenseId },
            { $set: updateFields },
            { new: true, runValidators: true }
        );
        if (!expense) {
            return res.status(404).json({ message: "Expense not found." });
        }
        const newActivity = new ExpenseHistory({expenseId, activity: "Expense Approved", loggedBy: employeeName});
        await newActivity.save();
        return res.status(200).json({ message: "Expense approved.", expense });
    } catch (error) {
        res.status(500).json({ message: "Error rejecting expense.", error });
    }
}

export const rejectExpense = async (req, res) => {
    const { expenseId, employeeName, comments } = req.body;
    try {
        const updateFields = {};
        updateFields.status="Rejected";
        updateFields.stage=0;
        const expense = await Expense.findOneAndUpdate(
            { expenseId },
            { $set: updateFields },
            { new: true, runValidators: true }
        );
        if (!expense) {
            return res.status(404).json({ message: "Expense not found." });
        }
        const newActivity = new ExpenseHistory({expenseId, activity: `Expense Rejected. Comments: ${comments}`, loggedBy: employeeName});
        newActivity.save();
        return res.status(200).json({ message: "Expense Rejected.", expense });
    } catch (error) {
        res.status(500).json({ message: "Error Rejecting expense.", error });
    }
}

export const updateExpense = async (req, res) => {
    const { expenseId, name, purpose, category, invDate, currency, bill, claim, paymethod, projectCode, status, employeeName } = req.body;
    try {
        const updateFields = {};
        if (name !== undefined) updateFields.name = name;
        if (purpose !== undefined) updateFields.purpose = purpose;
        if (category !== undefined) updateFields.category = category;
        if (invDate !== undefined) updateFields.invDate = invDate;
        if (currency !== undefined) updateFields.currency = currency;
        if (bill !== undefined) updateFields.bill = bill;
        if (claim !== undefined) updateFields.claim = claim;
        if (paymethod !== undefined) updateFields.paymethod = paymethod;
        if (projectCode !== undefined) updateFields.projectCode = projectCode;
        if (status !== undefined) updateFields.status = status;
        updateFields.stage = 2; 
        const expense = await Expense.findOneAndUpdate(
            { expenseId },
            { $set: updateFields },
            { new: true, runValidators: true }
        );
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        const newActivity = new ExpenseHistory({expenseId, activity: "Expense Edited", loggedBy: employeeName});
        await newActivity.save();
        res.status(200).json({ message: 'Expense updated successfully', expense });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}