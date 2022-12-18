import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  let amount = 0
  cartCtx.items.forEach(item => 
    amount = amount + item.price)

  // let newItems = cartCtx.items.filter((item, index) => cartCtx.items.indexOf(item) !== index)

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items
      .map((item) => (
        <li key={item.id}>{item.name}, Quantity : {item.quantity}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{amount.toFixed(2)}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      <button className={classes.button}>Order</button>
    </div>
  </Modal>
  );
};

export default Cart;