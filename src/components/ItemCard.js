import { useState } from 'react';
import '../styles/itemcard.css';

const ItemCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  function handleChange(event) {
    setQuantity(event.target.value);
  }

  return (
    <div className="itemcard--wrapper">
      <span className="itemcard--name">
        Name: <p>{props.name}</p>
      </span>
      <label className="itemcard--quantity">
        Quantity:
        <input
          type="number"
          min="1"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />
      </label>
      <button
        className="itemcard--button"
        onClick={() => props.addToCart('name', quantity)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCard;