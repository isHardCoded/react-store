const BASE_URL = 'http://localhost:8000/cart'

export const CartService = {
	async getCart() {
		const response = await fetch(BASE_URL)
		if (!response.ok) throw new Error('Ошибка при получении корзины')
		return response.json()
	},

	async addToCart(product) {
		const existing = await fetch(`${BASE_URL}?productId=${product.id}`)
		const data = await existing.json()

		if (data.length > 0) {
			const current = data[0]
			return fetch(`${BASE_URL}/${current.id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ quantity: current.quantity + 1 }),
			})
		} else {
			return fetch(BASE_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					productId: product.id,
					name: product.name,
					price: product.price,
					imageUrl: product.imageUrl,
					quantity: 1,
				}),
			})
		}
	},

	async updateQuantity(id, quantity) {
		return fetch(`${BASE_URL}/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ quantity }),
		})
	},

	async removeFromCart(id) {
		return fetch(`${BASE_URL}/${id}`, {
			method: 'DELETE',
		})
	},
}
