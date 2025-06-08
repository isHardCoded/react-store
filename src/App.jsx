import './App.css'

function Product() {
	return (
		<>
			<p className='product'>Товар</p>
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
