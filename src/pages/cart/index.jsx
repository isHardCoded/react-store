import styles from './index.module.scss'

import Header from '../../components/header'
import CartList from '../../components/list/cart'
import OrderDetail from '../../components/OrderDetail'

const Cart = () => {
	return (
		<div className={styles.container}>
			<Header />
			<h1 style={{ marginTop: 24 }}>Your Cart</h1>
			<div style={{ display: 'flex', gap: 20 }}>
				<CartList />
				<OrderDetail />
			</div>
		</div>
	)
}

export default Cart
