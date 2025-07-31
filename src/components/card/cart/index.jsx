import React from 'react'

import styles from './index.module.scss'
import TrashIcon from '../../../assets/icons/trash.svg'
import { useCart } from '../../../context/CartContext'

const CartItem = React.memo(({ item }) => {
	const { removeFromCart, updateQuantity } = useCart()

	const handleIncrement = React.useCallback(() => {
		updateQuantity(item.id, item.quantity + 1)
	}, [item.id, item.quantity, updateQuantity])

	const handleDecrement = React.useCallback(() => {
		if (item.quantity > 1) {
			updateQuantity(item.id, item.quantity - 1)
		}
	}, [item.id, item.quantity, updateQuantity])

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
})

export default CartItem
