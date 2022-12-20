import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext)

  let quantity = 0
  const addItemtoCart = (e) => {
    e.preventDefault()
    quantity = Number(document.getElementById('amount_' + props.id).value)
    cartCtx.addItem(props.item, quantity)
    
  }

  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addItemtoCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;