import { NavLink } from "react-router-dom";
import style from "./bookCard.module.css";

export default function BookCard({ book }: { book: BookDetailType }) {
  return (
    <NavLink to={`/bookdetail/${book.id}`} className={style.card}>
      <img
        src={book.cover_image}
        alt={`${book.title}`}
        className={style.bookPicture}
      />
      <h2 className={style.title}>{book.title}</h2>
      <p className={style.author}>
        {" "}
        <span className={style.author}>{book.author}</span>
      </p>
    </NavLink>
  );
}
