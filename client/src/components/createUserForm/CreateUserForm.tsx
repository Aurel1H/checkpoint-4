import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./createUserForm.module.css";

export default function CreateUserForm() {
  const minPassword: number = 8;
  const maxPassword: number = 255;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { confirmed_password, ...rest } = data;

      const transformedData = {
        ...rest,
        lastname: rest.lastname.toLowerCase(),
        firstname: rest.firstname.toLowerCase(),
        email: rest.email.toLowerCase(),
        hash_password: rest.hash_password,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        await response.json();
        reset();
        toast.success("Vous êtes enregistré");
        navigate("/allbookspage");
      } else {
        throw new Error("Erreur lors de l'enregistrement");
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi...");
    }
  };

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.card}>
        <h1 className={style.title}>Formulaire d'inscription</h1>
        <section>
          <label htmlFor="lastname" className={style.label}>
            Nom
            <input
              id="lastname"
              type="text"
              aria-label="Saisissez votre nom"
              placeholder="Saquet"
              className={style.input}
              {...register("lastname", {
                required: "champ obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s-]+$/,
                  message:
                    "Le nom peut seulement contenir des lettres, des espaces et des tirets.",
                },
              })}
            />
            <span className={style.errorText}>{errors.lastname?.message}</span>
          </label>
          <label htmlFor="firstname" className={style.label}>
            Prénom
            <input
              id="firstname"
              type="text"
              aria-label="Saisissez votre prénom"
              placeholder="Bilbon"
              className={style.input}
              {...register("firstname", {
                required: "champ obligatoire",
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s-]+$/,
                  message:
                    "Le prénom peut seulement contenir des lettres, des espaces et des tirets.",
                },
              })}
            />
            <span className={style.errorText}>{errors.firstname?.message}</span>
          </label>
          <label htmlFor="hash_password" className={style.label}>
            Mot de passe
            <input
              id="hash_password"
              type="password"
              aria-label="Saisissez votre mot de passe"
              placeholder="Saisissez votre mot de passe"
              className={style.input}
              minLength={minPassword}
              maxLength={maxPassword}
              autoComplete="current-password"
              {...register("hash_password", {
                required: "champ obligatoire",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                  message:
                    "Le mot de passe doit contenir au minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial",
                },
              })}
            />
            <span className={style.errorText}>
              {errors.hash_password?.message}
            </span>
          </label>
          <label className={style.label}>
            Vérification du mot de passe
            <input
              id="confirmed_password"
              type="password"
              aria-label="Confirmez votre mot de passe"
              placeholder="Confirmez votre mot de passe"
              className={style.input}
              minLength={minPassword}
              maxLength={maxPassword}
              autoComplete="confirmed_password"
              {...register("confirmed_password", {
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                  message:
                    "Le mot de passe doit contenir au minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial",
                },
                validate: (value) =>
                  value === watch("hash_password") ||
                  "Les mots de passe ne correspondent pas",
              })}
            />
            <span className={style.errorText}>
              {errors.confirmed_password?.message}
            </span>
          </label>

          <label htmlFor="email" className={style.label}>
            Email
            <input
              id="email"
              type="email"
              aria-label="Saisissez votre email"
              placeholder="bilbon@terredumilieu.com"
              className={style.input}
              autoComplete="current-email"
              {...register("email", { required: "champ obligatoire" })}
            />
          </label>
          <button type="submit" className={style.buttonCreateUser}>
            M'enregistrer
          </button>
          <a href="/allbookspages" className={style.loginLink}>
            Page d'accueil
          </a>
        </section>
      </form>
    </section>
  );
}
