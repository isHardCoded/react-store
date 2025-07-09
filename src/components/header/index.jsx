import styles from './index.module.scss'

import CartIcon from '../../assets/icons/cart.svg'
import UserIcon from '../../assets/icons/user.svg'
import WishlistIcon from '../../assets/icons/wishlist.svg'
import LoopIcon from '../../assets/icons/loop.svg'
import { Link } from 'react-router-dom'

const Header = () => {
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
				<button>
					<Link to={{ pathname: '/cart' }}>
						<img src={CartIcon} alt='' />
					</Link>
				</button>
				<button>
					<img src={UserIcon} alt='' />
				</button>
			</div>
		</header>
	)
}

export default Header
