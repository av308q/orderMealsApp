import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = ( 
    <ul className={classes['cart-item']}>
        {[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => (
        <li>{item.name}</li>
    ))}
    </ul>
    );
    return <div>
        {cartItems}
        <div></div>
        <dive></dive>
    </div>
};

export default Cart;