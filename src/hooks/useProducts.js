import React from 'react'
import { fetchProducts } from '../services/ProductService'

export function useProducts() {
	const [products, setProducts] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(null)

	React.useEffect(() => {
		let cancelled = false

		const loadProducts = async () => {
			try {
				setLoading(true)
				setError(null)

				const data = await fetchProducts()

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

		loadProducts()

		return () => {
			cancelled = true
		}
	}, [])

	return { products, loading, error }
}
