import {Router} from "express"
import { addNewExpense, approveExpense, fetchAllExpenses, fetchExpenseDetail, fetchTeamExpenses, rejectExpense, updateExpense } from "../controllers/expense.controller.js";

const router = Router();

router.post('/add-expense', addNewExpense);
router.post('/fetch-expenses', fetchAllExpenses);
router.post('/fetch-team-expenses', fetchTeamExpenses);
router.post('/fetch-expense-detail', fetchExpenseDetail);
router.post('/approve-expense', approveExpense);
router.post('/reject-expense', rejectExpense);
router.post('/update-expense', updateExpense);
export default router;