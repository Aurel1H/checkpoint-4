import { NavLink } from "react-router-dom";
import style from "../errorPage/errorPage.module.css";

function ErrorPage() {
  return (
    <>
      <h1 className={style.errorTitle}>Error404</h1>
      <div className={style.gif}>
        <img src="/video-livre.gif" alt="GIF error-404" />
      </div>
      <p className={style.textError}>
        La page que vous recherchez n'existe pas ou est indisponible.
      </p>
      <div className={style.sectionButton}>
        <button className={style.buttonContactUs} type="button">
          <a href="mailto:crewcodile@gmail.com?subject=Sujet%20du%20mail&body=Contenu%20du%20message">
            Contactez-nous
          </a>
        </button>
        <button className={style.buttonHomePage} type="button">
          <NavLink to={"/allbookspage"}>Page d'accueil</NavLink>
        </button>
      </div>
    </>
  );
}

export default ErrorPage;
