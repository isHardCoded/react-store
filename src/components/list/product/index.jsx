import React from 'react'
import styles from './index.module.scss'

import ProductCard from '../../card/product'

const ProductList = () => {
	const [products, setProducts] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(null)

	React.useEffect(() => {
		let cancelled = false

		const getProducts = async () => {
			try {
				setLoading(true)
				setError(null)

				const response = await fetch('http://localhost:8000/products')

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}

				const data = await response.json()

				if (!cancelled) {
					setProducts(data)
				}
			} catch (err) {
				if (!cancelled) {
					setError(err.message)
					setProducts([])
				}
			} finally {
				if (!cancelled) {
					setLoading(false)
				}
			}
		}

		getProducts()

		return () => {
			cancelled = true
		}
	}, [])

	if (loading) {
		return <div className={styles.loading}>Загрузка продуктов...</div>
	}

	if (error) {
		return (
			<div className={styles.error}>
				<p>Ошибка при загрузке продуктов: {error}</p>
				<button onClick={() => window.location.reload()}>
					Попробовать снова
				</button>
			</div>
		)
	}

	return (
		<ul className={styles.list}>
			{products.map(product => (
				<li key={product.id}>
					<ProductCard {...product} />
				</li>
			))}
		</ul>
	)
}

export default ProductList
