import CartItem from '../../card/cart'
import styles from './index.module.scss'
import { useCart } from '../../../context/CartContext'

const CartList = () => {
	const { cart, loading, error } = useCart()

	if (loading) return <p>Загрузка корзины...</p>
	if (error) return <p>Ошибка: {error}</p>

	if (cart.length === 0) {
		return <p className={styles.empty}>Ваша корзина пуста</p>
	}

	return (
		<ul className={styles.list}>
			{cart.map(item => (
				<li key={item.id}>
					<CartItem item={item} />
				</li>
			))}
		</ul>
	)
}

export default CartList
