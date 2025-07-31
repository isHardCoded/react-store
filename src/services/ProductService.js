const API_URL = 'http://localhost:8000/products'

export async function fetchProducts() {
	try {
		const response = await fetch(API_URL)

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return await response.json()
	} catch (error) {
		throw new Error(error.message || 'Ошибка при загрузке продуктов')
	}
}
