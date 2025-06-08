// изменяем импорт
import styles from './App.module.css'

function Product() {
	return (
		<>
			{/* вытаскиваем класс product из объекта styles */}
			<p className={styles.product}>Товар</p>
		</>
	)
}

function App() {
	return (
		<>
			<h1>Интернет-магазин</h1>
			<Product />
			<Product />
			<Product />
		</>
	)
}

export default App
