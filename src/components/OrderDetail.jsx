import styles from './OrderDetail.module.scss'
import { useCart } from '../hooks/useCart'

const OrderDetail = () => {
	const { cart } = useCart()

	const subtotal = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)
	const discount = subtotal * 0.2
	const delivery = 15
	const total = subtotal - discount + delivery

	return (
		<div className={styles.detail}>
			<h2>Order Summary</h2>
			<div className={styles.stats}>
				<div>
					<p>Subtotal</p>
					<span>${subtotal}</span>
				</div>
				<div>
					<p>Discount (-20%)</p>
					<span>-${discount}</span>
				</div>
				<div>
					<p>Delivery Fee</p>
					<span>${delivery}</span>
				</div>
			</div>
			<div className={styles.total}>
				<p>Total</p>
				<span>${total}</span>
			</div>
			<button>Go to Checkout</button>
		</div>
	)
}

export default OrderDetail
