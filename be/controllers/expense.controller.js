import Expense from "../models/expense.model.js";

export const addNewExpense = async(req,res) => {
    const {name, purpose, category, invDate, currency, bill, claim, paymethod, projectCode, employeeId, approvalManagerId} = req.body;
    try {
        const expense = new Expense({name, purpose, category, invDate, currency, bill, claim, paymethod, projectCode, employeeId, approvalManagerId});
        await expense.save();
        res.status(200).json({message: "Expense Added Successfully."});
    } catch (error) {
        res.status(500).json({message: "Error adding a new expense.", error});
    }
}

export const fetchAllExpenses = async(req, res) => {
    const {employeeId} = req.body;
    try {
        const allExpenses = await Expense.find({employeeId: employeeId});
        res.status(200).json({allExpenses});
    } catch (error) {
        res.status(500).json({message: "Error fetching expenses.", error});   
    }
}

export const fetchTeamExpenses = async(req,res) => {
    const {employeeId} = req.body;
    try {
        const allExpenses = await Expense.find({approvalManagerId: employeeId});
        res.status(200).json({allExpenses});
    } catch (error) {
        res.status(500).json({message: "Error fetching Team Expenses.", error});
    }
}