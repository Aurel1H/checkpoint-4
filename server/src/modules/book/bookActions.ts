import type { RequestHandler } from "express";
import Joi from "joi";
import bookRepository from "./bookRepository";

const browseAllBooks: RequestHandler = async (req, res, next) => {
  try {
    const book = await bookRepository.readAllBooks();
    res.json(book);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const bookId = Number.parseInt(req.params.id);
    const book = await bookRepository.read(bookId);

    if (book == null) {
      res.sendStatus(404);
    } else {
      res.json(book);
    }
  } catch (err) {
    next(err);
  }
};

const addBook: RequestHandler = async (req, res, next) => {
  try {
    const newBook = {
      title: req.body.title,
      summary: req.body.summary,
      genre: req.body.genre,
      language: req.body.language,
      author: req.body.author,
      publisher: req.body.publisher,
      illustrator: req.body.illustrator,
      owner: req.body.owner,
      isbn: req.body.isbn,
      page_count: req.body.page_count,
      pickup_address: req.body.pickup_address,
      cover_image: req.body.cover_image,
    };
    const insertId = await bookRepository.create(newBook);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const validateDataBookForm: RequestHandler = async (req, res, next) => {
  const dataSchema = Joi.object({
    title: Joi.string().required(),
    summary: Joi.string().required(),
    genre: Joi.string(),
    language: Joi.string(),
    author: Joi.string().required(),
    publisher: Joi.string(),
    illustrator: Joi.string(),
    owner: Joi.string().required(),
    isbn: Joi.number().required(),
    page_count: Joi.number(),
    pickup_address: Joi.string().required(),
    statut: Joi.string(),
    cover_image: Joi.string(),
  });

  const { error } = dataSchema.validate(req.body, { abortEarly: false });
  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

const updateStatusToReserve: RequestHandler = async (req, res, next) => {
  try {
    const bookId = Number.parseInt(req.body.id);
    await bookRepository.updateStatusToReserve(bookId);
    const book = await bookRepository.read(bookId);

    if (book == null) {
      res.sendStatus(404);
    } else {
      res.json(book);
    }
  } catch (err) {
    next(err);
  }
};

const deleteBook: RequestHandler = async (req, res, next) => {
  try {
    const bookId = Number.parseInt(req.body.id);
    await bookRepository.deleteBook(bookId);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

export default {
  read,
  addBook,
  validateDataBookForm,
  browseAllBooks,
  updateStatusToReserve,
  deleteBook,
};
