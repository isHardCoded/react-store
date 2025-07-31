import React from 'react'
import { CartService } from '../services/CartService'

export function useCart() {
	const [cart, setCart] = React.useState([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(null)

	const fetchCart = React.useCallback(async () => {
		try {
			setLoading(true)
			const data = await CartService.getCart()
			setCart(data)
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}, [])

	const addToCart = async product => {
		await CartService.addToCart(product)
		await fetchCart()
	}

	const removeFromCart = async id => {
		await CartService.removeFromCart(id)
		await fetchCart()
	}

	const updateQuantity = async (id, quantity) => {
		await CartService.updateQuantity(id, quantity)
		await fetchCart()
	}

	React.useEffect(() => {
		fetchCart()
	}, [fetchCart])

	return {
		cart,
		loading,
		error,
		addToCart,
		removeFromCart,
		updateQuantity,
	}
}
