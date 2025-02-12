import express from "express";
import bookActions from "../modules/book/bookActions";

const router = express.Router();

router.get("/api/book/:id", bookActions.read);
router.post(
  "/api/bookcreate",
  bookActions.validateDataBookForm,
  bookActions.addBook,
);
router.post("/api/book/updatestatus", bookActions.updateStatusToReserve);
router.post("/api/book/delete", bookActions.deleteBook);

//Routes pour l'affichage des livres
router.get("/api/allbooks", bookActions.browseAllBooks);

export default router;
