import express from "express";
import bookroutes from "./routes/book.routes";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

router.use("/", bookroutes);

/* ************************************************************************* */

export default router;
