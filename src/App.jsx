import styles from './App.module.css'
import SneakersImage from './assets/images/sneakers-image.jpg'

function Header() {
	return (
		<header className={styles.header}>
			<h2>Logo</h2>
		</header>
	)
}

function Product() {
	function handleClick() {
		console.log('Working!')
	}

	return (
		<div className={styles.product}>
			<img src={SneakersImage} alt='' />
			<div className={styles.content}>
				<div className={styles.title}>
					<h4>Sneakers Red & White 2025</h4>
					<button onClick={event => handleClick(event)}>+</button>
				</div>
				<p className={styles.description}>NIKE</p>
				<p className={styles.price}>$38.00</p>
			</div>
		</div>
	)
}

function App() {
	return (
		<>
			<div className={styles.container}>
				<Header />
			</div>
			<div className={styles.container}>
				<ul className={styles.list}>
					<li>
						<Product />
					</li>
					<li>
						<Product />
					</li>
					<li>
						<Product />
					</li>
				</ul>
			</div>
		</>
	)
}

export default App
