import styles from './index.module.scss'
import WishIcon from '../../../assets/icons/wish.svg'
import { useCart } from '../../../hooks/useCart'

const ProductCard = ({ id, name, price, imageUrl }) => {
	const { addToCart } = useCart()

	const handleAdd = () => {
		addToCart({ id, name, price, imageUrl })
	}

	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<img src={imageUrl} alt={name} />
				<div className={styles.buttons}>
					<button>
						<img src={WishIcon} alt='Избранное' />
					</button>
				</div>
			</div>
			<div className={styles.content}>
				<div>
					<h4>{name}</h4>
					<div className={styles.stats}>
						<span>${price}</span>
					</div>
				</div>
				<button onClick={handleAdd}>+</button>
			</div>
		</div>
	)
}

export default ProductCard
