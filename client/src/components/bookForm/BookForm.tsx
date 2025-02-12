// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./bookForm.module.css";

function CreateBookForm() {
  const { register, handleSubmit, reset } = useForm<BookDetailType>();

  const onSubmit = async (data: BookDetailType) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookcreate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        reset();
        toast.success("Livre créé avec succès");
      } else {
        toast.error("Erreur lors de la création du livre");
      }
    } catch (error) {
      toast.error("Erreur de connexion au serveur...");
    }
  };

  return (
    <section className={style.bookContainer}>
      <h2 className={style.titleH2}>Création d'un livre</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <section>
          <label htmlFor="title" className={style.label}>
            Titre du livre :
            <input
              className={style.input}
              type="text"
              id="title"
              placeholder="Saisissez le titre ici"
              {...register("title", { required: true })}
            />
          </label>
          <label htmlFor="author" className={style.label}>
            Auteur du livre :
            <input
              className={style.input}
              id="author"
              placeholder="Saisissez le nom de l'auteur du livre"
              {...register("author", { required: true })}
            />
          </label>
        </section>
        <section>
          <label htmlFor="summary" className={style.label}>
            Résumé :
            <textarea
              className={style.textarea}
              id="summary"
              placeholder="Saisissez la résumé du livre ici"
              {...register("summary", { required: true })}
            />
          </label>
        </section>
        <section>
          <label htmlFor="author" className={style.label}>
            Détails de l'oeuvre
            <input
              className={style.input}
              id="publisher"
              placeholder="Saisissez le nom de l'éditeur du livre"
              {...register("publisher", { required: false })}
            />
            <input
              className={style.input}
              id="illustrator"
              placeholder="Saisissez le nom de l'illustrateur du livre"
              {...register("illustrator", { required: false })}
            />
            <input
              className={style.input}
              id="isbn"
              placeholder="Saisissez l'ISBN du livre"
              {...register("isbn", { required: true })}
            />
            <input
              className={style.input}
              id="page_count"
              placeholder="Saisissez le nombre de pages du livre"
              {...register("page_count", { required: false })}
            />
            <input
              className={style.input}
              id="cover_image"
              placeholder="Sélectionner une image de couverture"
              {...register("cover_image", { required: false })}
              // A modifier pour l'upload de l'image
            />
            <input
              className={style.input}
              id="genre"
              placeholder="Saisissez le genre du livre"
              {...register("genre", { required: true })}
            />
          </label>
        </section>
        <section>
          <label htmlFor="author" className={style.label}>
            Détails de collecte
            <input
              className={style.input}
              id="pickup_address"
              placeholder="Saisissez l'adresse où récupérer le livre"
              {...register("pickup_address", { required: true })}
            />
            <input
              className={style.input}
              id="pickup_address"
              placeholder="Saisissez la langue du livre"
              {...register("language", { required: true })}
            />
            <input
              className={style.input}
              id="pickup_address"
              placeholder="Saisissez votre prénom et votre nom"
              {...register("owner", { required: true })}
            />
          </label>
        </section>
        <section className={style.buttongroup}>
          <NavLink to={"/allbookspage"}>
            <button type="button" className={style.canceldButton}>
              Annuler
            </button>
          </NavLink>
          <button type="submit" className={style.addBookButton}>
            Ajouter un livre
          </button>
        </section>
      </form>
    </section>
  );
}

export default CreateBookForm;
