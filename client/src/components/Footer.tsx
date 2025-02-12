import { Link } from "react-router-dom";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <Link to="/" className="footer__logo">
        Wild Series
      </Link>
    </footer>
  );
}
