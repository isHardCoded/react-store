import styles from './App.module.scss'

import CartIcon from './assets/icons/cart.svg'
import UserIcon from './assets/icons/user.svg'
import WishlistIcon from './assets/icons/wishlist.svg'
import LoopIcon from './assets/icons/loop.svg'

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

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
		</div>
	)
}

export default App
