import styles from './index.module.scss'
import JacketImage from '../../../assets/images/products/jacket.svg'

const CartItem = () => {
	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<img src={JacketImage} alt='' />
			</div>
			<div className={styles.content}>
				<h2>Quilted Satin Jacket</h2>
				<div>
					<span>$145</span>
					<div className={styles.buttons}>
						<button>-</button>
						<span>1</span>
						<button>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
