import ItemCard from './ItemCard';
import '../styles/shoppage.css';

const Shoppage = (props) => {
  const items = ['CD player', 'Mystery box', 'Book', 'Xbox', 'Bed', 'Plant'];

  const itemCards = items.map((item) => {
    return <ItemCard addToCart={props.addToCart} name={item} />;
  });

  return <div className="shoppage--wrapper">{itemCards}</div>;
};

export default Shoppage;
