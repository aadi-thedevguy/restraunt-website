import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  let amount = 0
  cartCtx.items.forEach(item => {
    if (item.quantity) {

      amount = amount + (item.item.price * item.quantity)
    }
  })

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items
        .map((item) => (
          <CartItem
            key={item.item.id}
            id={item.item.id}
            name={item.item.name}
            amount={item.quantity}
            price={item.item.price}
          />
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