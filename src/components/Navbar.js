import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import shoppingCart from '../icons/shopping-cart.png';

const Navbar = (props) => {
  return (
    <nav className="navbar--wrapper">
      <div class="navbar--links-wrapper">
        <Link className="navbar--link" to="/">
          Home
        </Link>
        <Link className="navbar--link" to="shop">
          Shop
        </Link>
      </div>
      <h1>Shopper</h1>
      <Link className="navbar--link" to="shop">
        <div className="navbar--cart">
          <span>23</span>
          <img
            className="navbar--icon"
            src={shoppingCart}
            alt="shopping cart"
          />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
