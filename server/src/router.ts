import express from "express";
import AuthRoute from "./routes/auth.routes";
import bookroutes from "./routes/book.routes";
import UserRoute from "./routes/user.routes";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

router.use("/", AuthRoute);
router.use("/", UserRoute);
router.use("/", bookroutes);

/* ************************************************************************* */

export default router;
