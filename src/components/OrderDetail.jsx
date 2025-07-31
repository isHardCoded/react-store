import styles from './OrderDetail.module.scss'

const OrderDetail = () => {
	return (
		<div className={styles.detail}>
			<h2>Order Summary</h2>
			<div className={styles.stats}>
				<div>
					<p>Subtotal</p>
					<span>$565</span>
				</div>
				<div>
					<p>Discount (-20%)</p>
					<span>-$113</span>
				</div>
				<div>
					<p>Delivery Fee</p>
					<span>$15</span>
				</div>
			</div>
			<div className={styles.total}>
				<p>Total</p>
				<span>$467</span>
			</div>
			<button>Go to Checkout</button>
		</div>
	)
}

export default OrderDetail
