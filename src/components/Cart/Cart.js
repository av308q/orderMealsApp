import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = ( 
    <ul className={classes['cart-items']}>
        {[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => (
        <li>{item.name}</li>
    ))}
    </ul>
    );
    return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <dive classesName={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
      </dive>
    </Modal>
    );
};

export default Cart;