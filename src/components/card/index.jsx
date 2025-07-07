import styles from './index.module.scss'

import WishIcon from '../../assets/icons/wish.svg'

const ProductCard = ({ name, price, imageUrl }) => {
	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<img src={imageUrl} alt='' />
				<div className={styles.buttons}>
					<button>
						<img src={WishIcon} alt='' />
					</button>
				</div>
			</div>
			<div className={styles.content}>
				<h4>{name}</h4>
				<div className={styles.stats}>
					<span>${price}</span>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
