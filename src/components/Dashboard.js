import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = (props) => {

// console.log(props)

const allStocks = props.stockData.map ( (stock) => {
return (
	<>
		{/* make sure to have both forward slashes or it won't reroute properly */}
		{/* this link sends you to /stocks/whateverthestocknameis */}
		<Link to={'/stocks/' + stock.name}>
			<p>
				{stock.name}{' '}
				<strong>
					<span>{stock.symbol}</span>
				</strong>{' '}
			</p>
		</Link>
	</>
);
})


    return (
			<div className='stock'>
				<h2>Active Stocks Dashboard</h2>
				<ul>{allStocks}</ul>
			</div>
		);

}

export default Dashboard