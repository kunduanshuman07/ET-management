import {Router} from "express"
import { addNewExpense, fetchAllExpenses, fetchTeamExpenses } from "../controllers/expense.controller.js";

const router = Router();

router.post('/add-expense', addNewExpense);
router.post('/fetch-expenses', fetchAllExpenses);
router.post('/fetch-team-expenses', fetchTeamExpenses);
export default router;