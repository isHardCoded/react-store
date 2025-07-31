import styles from './index.module.scss'
import JacketImage from '../../../assets/images/products/jacket.svg'
import TrashIcon from '../../../assets/icons/trash.svg'

const CartItem = () => {
	return (
		<div className={styles.item}>
			<button className={styles.trash}>
				<img src={TrashIcon} alt='' />
			</button>
			<div className={styles.image}>
				<img src={JacketImage} alt='' />
			</div>
			<div className={styles.content}>
				<h2>Quilted Satin Jacket</h2>
				<div className={styles.wrapper}>
					<span className={styles.price}>$145</span>
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
