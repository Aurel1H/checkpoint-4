import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import style from "./bookDetails.module.css";

export default function BookDetail({ id }: { id: string }) {
  const navigate = useNavigate();
  const [book, setBook] = useState(null as null | BookDetailType);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/book/${id}`)
      .then((response) => response.json())
      .then((data: BookDetailType) => {
        setBook(data);
      });
  }, [id]);

  const changeStatus = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/book/updatestatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data: BookDetailType) => {
        setBook(data);
      });
  };

  const deleteBook = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/book/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id: id }),
    }).then((response) => {
      if (response.status === 200) navigate("/allbookspage");
    });
  };

  return (
    book && (
      <section className={style.container}>
        <figure>
          <img src={book.cover_image} alt="" />
        </figure>
        <article className={style.title}>
          <h1>{book.title}</h1>
        </article>
        <article>
          <h2 className={style.titleH2}>Auteur</h2>
          <p>{book.author}</p>
        </article>
        <article>
          <h2 className={style.titleH2}>Statut</h2>
          <p>{book.statut}</p>
        </article>
        <article className={style.summary}>
          <h2 className={style.titleH2}>Résumé du livre</h2>
          <ShowMoreText
            lines={1}
            more="Voir plus"
            less="Voir moins"
            className={style.paragraph}
            anchorClass={style.ShowMoreText}
          >
            <p>{book.summary}</p>
          </ShowMoreText>
        </article>
        <article>
          <h2 className={style.titleH2}>Détails de l'oeuvre</h2>
          <p>{book.publisher}</p>
          <p>{book.illustrator}</p>
          <p>{book.isbn}</p>
          <p>{book.page_count}</p>
        </article>
        <article>
          <h2 className={style.titleH2}>Addresse où récupérer le livre</h2>
          <p>{book.pickup_address}</p>
        </article>
        <article className={style.booking}>
          <button type="button" onClick={() => deleteBook()}>
            Supprimer le livre
          </button>
          <button
            type="button"
            disabled={book.statut === "Réservé"}
            onClick={() => changeStatus()}
          >
            Réserver
          </button>
        </article>
      </section>
    )
  );
}
