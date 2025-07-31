import styles from './index.module.scss'

import CartIcon from '../../assets/icons/cart.svg'
import UserIcon from '../../assets/icons/user.svg'
import WishlistIcon from '../../assets/icons/wishlist.svg'
import LoopIcon from '../../assets/icons/loop.svg'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Header = () => {
	const { cart } = useCart()

	const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
		<header className={styles.header}>
			<h2>Exclusive</h2>
			<nav>
				<ul>
					<li>
						<Link to={{ pathname: '/' }}>Home</Link>
					</li>
					<li>
						<Link to={{ pathname: '/contact' }}>Contact</Link>
					</li>
					<li>
						<Link to={{ pathname: '/about' }}>About</Link>
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
					<Link to={{ pathname: '/wishlist' }}>
						<img src={WishlistIcon} alt='' />
					</Link>
				</button>
				<button className={styles.cartButton}>
					<Link to={{ pathname: '/cart' }}>
						<img src={CartIcon} alt='Cart' />
						{totalCount > 0 && (
							<span className={styles.badge}>{totalCount}</span>
						)}
					</Link>
				</button>
				<button>
					<img src={UserIcon} alt='User' />
				</button>
			</div>
		</header>
	)
}

export default Header
