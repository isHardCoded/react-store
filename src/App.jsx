import styles from './App.module.scss'
import SneakersImage from './assets/images/sneakers-image.jpg'
import { FaRegUser } from 'react-icons/fa'

function Header() {
	const handleChange = event => {
		const newValue = event.target.value
		console.log('Новое значение:', newValue)
	}

	return (
		<header className={styles.header}>
			<div>
				<h2>Store</h2>
				<input type='text	' placeholder='Search...' onChange={handleChange} />
			</div>
			<div>
				<FaRegUser size={24} color='#3258e3' />
				<button>Profile</button>
			</div>
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
