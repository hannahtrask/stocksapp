import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
			<nav>
				<Link to='/'>
					<h3>iStocks</h3>
				</Link>
				<ul className='links'>
					<Link to='/dashboard'>
						<li>Dashboard</li>
					</Link>
					<Link to='/about'>
						<li>About</li>
					</Link>
				</ul>
			</nav>
		);
}


export default Nav