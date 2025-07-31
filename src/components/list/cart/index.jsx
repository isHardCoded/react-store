import CartItem from '../../card/cart'
import styles from './index.module.scss'

const CartList = () => {
	return (
		<ul className={styles.list}>
			<li>
				<CartItem />
			</li>
			<li>
				<CartItem />
			</li>
			<li>
				<CartItem />
			</li>
		</ul>
	)
}

export default CartList
