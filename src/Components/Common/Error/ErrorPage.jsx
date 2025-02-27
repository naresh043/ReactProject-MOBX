import { Link } from "react-router-dom";
import "../../../Styles/Common-css/Error/NotFround.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! Page Not Found</p>
      <p className="notfound-text">The page you are looking for doesn't exist.</p>
      <Link to="/" className="notfound-link">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
