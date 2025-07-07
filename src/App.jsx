import styles from './App.module.scss'

import Header from './components/header'
import ProductList from './components/list'

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
			<ProductList />
		</div>
	)
}

export default App
