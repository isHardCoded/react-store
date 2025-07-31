import styles from './index.module.scss'
import ProductCard from '../../card/product'
import { useProducts } from '../../../hooks/useProducts'

const ProductList = () => {
	const { products, loading, error } = useProducts()

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
