import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={style.navContainer}>
      <NavLink to={"/allbookspage"}>
        <img src="/logo-smb.png" alt="Logo img" className={style.logoImage} />
      </NavLink>
      <h1>Save My Book</h1>
      <div>
        <NavLink to={"/profile"}>
          <img
            src="/utilisateur.png"
            alt="Profil img"
            className={style.profileImage}
          />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
