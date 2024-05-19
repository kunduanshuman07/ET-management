import express from "express";
import http from "http";
import dotenv from 'dotenv'
import cors from "cors";
import connectDB from "./config/dbConfig.js";
import etSheetRoutes from "./routes/index.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    })
)

app.use('/etsheet', etSheetRoutes);

connectDB();
server.listen(PORT, () => {
    console.log("Server started on PORT ", PORT);
})