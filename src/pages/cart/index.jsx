import styles from './index.module.scss'

import Header from '../../components/header'
import CartList from '../../components/list/cart'

const Cart = () => {
	return (
		<div className={styles.container}>
			<Header />
			<CartList />
		</div>
	)
}

export default Cart
