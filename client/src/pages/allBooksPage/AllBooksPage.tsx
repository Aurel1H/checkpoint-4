import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookCard from "../../components/bookCard/BookCard";
import style from "./allBooksPage.module.css";

export default function AllBooksPage() {
  const [books, setBooks] = useState<BookDetailType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/allbooks`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch(() => toast.error("Erreur de connexion au serveur"));
  }, []);

  return (
    <main>
      <header className={style.header}>
        <h2 id="tous_les_livres"> Tous les livres</h2>
        <a href="/bookformpage" className={style.buttonCreateBook}>
          Créer un nouveau livre
        </a>
      </header>
      <section>
        <div className={style.cardsContainer}>
          {books.map((book) => (
            <div key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
          <a href="#tous_les_livres" className={style.buttonScrollToTop}>
            Revenir en haut
          </a>
        </div>
      </section>
    </main>
  );
}
