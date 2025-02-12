import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

// Book = BookCard
type Book = {
  title: string;
  summary: string;
  genre: string;
  language: string;
  author: string;
  publisher: string;
  illustrator: string;
  owner: string;
  isbn: number;
  page_count: string;
  pickup_address: string;
  // statut: string;
  cover_image: string;
};

class BookRepository {
  async create(Book: Book) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO book (title, summary, genre, language, author, publisher, illustrator, owner, isbn, page_count, pickup_address, statut, cover_image)  
      VALUES (?,?,?,?,?,?,?,?,?,?,?,"Disponible",?)`,
      [
        Book.title,
        Book.summary,
        Book.genre,
        Book.language,
        Book.author,
        Book.publisher,
        Book.illustrator,
        Book.owner,
        Book.isbn,
        Book.page_count,
        Book.pickup_address,
        Book.cover_image,
      ],
    );
    return result.insertId;
  }

  async read(BookId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
      book.title, book.summary, book.genre, book.language, book.author, book.publisher, book.illustrator, book.owner, book.isbn, book.statut, book.page_count, book.pickup_address, book.cover_image
      FROM book
      WHERE book.id=?`,
      [BookId],
    );
    return rows[0];
  }

  async readAllBooks() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT * FROM book 
      `,
    );
    return rows as Book[];
  }

  async updateStatusToReserve(BookId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `UPDATE book SET statut="Réservé"
      WHERE id=?
      `,
      [BookId],
    );
    return rows as Book[];
  }

  async deleteBook(BookId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `DELETE FROM book WHERE id=?
      `,
      [BookId],
    );
    return rows as Book[];
  }
}

export default new BookRepository();
