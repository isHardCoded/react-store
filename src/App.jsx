import styles from './App.module.scss'
import React from 'react'

/* HEADER ICONS */
import CartIcon from './assets/icons/cart.svg'
import UserIcon from './assets/icons/user.svg'
import WishlistIcon from './assets/icons/wishlist.svg'
import LoopIcon from './assets/icons/loop.svg'

/* PRODUCT CARD ICONS */
import WishIcon from './assets/icons/wish.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<h2>Exclusive</h2>
			<nav>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Sign Up</a>
					</li>
				</ul>
			</nav>
			<div className={styles.search}>
				<input type='text' placeholder='What are you looking for?' />
				<img src={LoopIcon} alt='' />
			</div>
			<div className={styles.buttons}>
				<button>
					<img src={WishlistIcon} alt='' />
				</button>
				<button>
					<img src={CartIcon} alt='' />
				</button>
				<button>
					<img src={UserIcon} alt='' />
				</button>
			</div>
		</header>
	)
}

const ProductCard = ({ name, price, imageUrl }) => {
	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<img src={imageUrl} alt='' />
				<div className={styles.buttons}>
					<button>
						<img src={WishIcon} alt='' />
					</button>
				</div>
			</div>
			<div className={styles.content}>
				<h4>{name}</h4>
				<div className={styles.stats}>
					<span>${price}</span>
				</div>
			</div>
		</div>
	)
}

const ProductList = () => {
	const [products, setProducts] = React.useState([])

	const getProducts = async () => {
		const response = await fetch('http://localhost:8000/products')
		const data = await response.json()
		setProducts(data)
	}

	React.useEffect(() => {
		getProducts()
	}, [])

	return (
		<ul className={styles.list}>
			{products.map(product => (
				<li>
					<ProductCard {...product} />
				</li>
			))}
		</ul>
	)
}

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
			<ProductList />
		</div>
	)
}

export default App
