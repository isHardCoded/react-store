import {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react'
import { CartService } from '../services/CartService'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchCart = useCallback(async () => {
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

	useEffect(() => {
		fetchCart()
	}, [fetchCart])

	const value = {
		cart,
		loading,
		error,
		addToCart,
		removeFromCart,
		updateQuantity,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
	return useContext(CartContext)
}
