import '../styles/itemcard.css';

const ItemCard = () => {
  return (
    <div className="itemcard--wrapper">
        <span className='itemcard--name'>Name: <p>product</p></span>
      <label className='itemcard--quantity'>
        Quantity:
        <input type="number" min="1" id="quantity" />
      </label>
      <button  className='itemcard--button'>Add to cart</button>
    </div>
  );
};

export default ItemCard;
