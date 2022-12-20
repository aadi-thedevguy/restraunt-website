import { useState } from 'react';
import CartContext from './cart-context';


const CartProvider = (props) => {

  const [items, setItems] = useState([])
  const [quantity, setQuantity] = useState(0)

  const addItemToCartHandler = (product, quantity) => {

    setQuantity( prevQty => prevQty + quantity)
    const checkProductInCart = items.find((item) => item.id === product.id);

    if(checkProductInCart) {
      const updateditems = items.map(item => {
        if(item.id === product.id) return {
            ...item,
            quantity: item.quantity + quantity
          }
        })
      setItems(updateditems);
    } else {
      product.quantity = quantity
      setItems([...items, product ]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    const newItems = items.filter(item => item.id !== id);
    let foundItem = items.find((item) => item.id === id);

    if (quantity > 0) setQuantity(prevQty => prevQty - 1)
    if (foundItem.quantity > 1) {
      setItems([...newItems, { ...foundItem, quantity: foundItem.quantity - 1 } ])
    } else {

      setItems(newItems);
    }
    
  };

  const cartContext = {
    items : items,
    totalAmount: 0,
    totalQty: quantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;