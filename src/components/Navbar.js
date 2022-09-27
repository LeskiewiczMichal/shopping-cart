import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar--wrapper">
      <h1>Shopper</h1>
      <div class="navbar--links-wrapper">
        <Link className="navbar--link" to="/">
          Home
        </Link>
        <Link className="navbar--link" to="shop">
          Shop
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
