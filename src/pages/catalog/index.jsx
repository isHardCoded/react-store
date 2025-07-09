import styles from './index.module.scss'

import Header from '../../components/header/index'
import ProductList from '../../components/list/index'

const Catalog = () => {
	return (
		<div className={styles.container}>
			<Header />
			<ProductList />
		</div>
	)
}

export default Catalog
