import styles from './App.module.scss'
import SneakersImage from './assets/images/sneakers-image.jpg'
import { FaRegUser } from 'react-icons/fa'
import React from 'react'

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
	const [isLiked, setIsLiked] = React.useState(false)

	const toggleLike = () => {
		setIsLiked(!isLiked)
	}

	function handleAddClick() {
		console.log('Working!')
	}

	return (
		<div className={styles.product}>
			<img src={SneakersImage} alt='' />
			<div className={styles.content}>
				<div className={styles.title}>
					<h4>Sneakers Red & White 2025</h4>
					<div className={styles.actions}>
						<button
							className={styles.likeButton}
							onClick={toggleLike}
							aria-label={isLiked ? 'Убрать лайк' : 'Добавить лайк'}
						>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill={isLiked ? 'red' : 'none'}
								stroke={isLiked ? 'red' : 'currentColor'}
								strokeWidth='1.5'
							>
								<path d='M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z' />
							</svg>
						</button>
						<button onClick={handleAddClick}>+</button>
					</div>
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
