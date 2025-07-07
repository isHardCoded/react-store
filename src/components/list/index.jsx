import React from 'react'
import styles from './index.module.scss'

import ProductCard from '../card'

const ProductList = () => {
	const [products, setProducts] = React.useState([])

	const getProducts = async () => {
		const response = await fetch('http://localhost:8000/products')
		const data = await response.json()
		setProducts(data)
	}

	React.useEffect(() => {
		getProducts()
	}, [])

	return (
		<ul className={styles.list}>
			{products.map(product => (
				<li>
					<ProductCard {...product} />
				</li>
			))}
		</ul>
	)
}

export default ProductList
