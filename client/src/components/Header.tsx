import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="header__logo">
        Wild Series
      </Link>

      <nav className="main-navigation">
        <Link to="/programs" className="main-navigation__link">
          Programmes
        </Link>
        <Link to="/login" className="main-navigation__link">
          Connexion
        </Link>
        <Link to="/signup" className="main-navigation__link">
          Inscription
        </Link>
      </nav>
    </header>
  );
}
