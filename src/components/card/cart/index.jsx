import styles from './index.module.scss'
import TrashIcon from '../../../assets/icons/trash.svg'
import { useCart } from '../../../context/CartContext'

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCart()

	const handleIncrement = () => {
		updateQuantity(item.id, item.quantity + 1)
	}

	const handleDecrement = () => {
		if (item.quantity > 1) {
			updateQuantity(item.id, item.quantity - 1)
		}
	}

	return (
		<div className={styles.item}>
			<button className={styles.trash} onClick={() => removeFromCart(item.id)}>
				<img src={TrashIcon} alt='Удалить' />
			</button>
			<div className={styles.image}>
				<img src={item.imageUrl} alt={item.name} />
			</div>
			<div className={styles.content}>
				<h2>{item.name}</h2>
				<div className={styles.wrapper}>
					<span className={styles.price}>${item.price}</span>
					<div className={styles.buttons}>
						<button onClick={handleDecrement}>-</button>
						<span>{item.quantity}</span>
						<button onClick={handleIncrement}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
