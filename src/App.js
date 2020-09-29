import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Stock from './components/Stock'
import stockData from './components/stock-data'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {
  //sets a use state of stock and starts og value of stock to be null until clicked
  const [stock, setStock] = useState(null)

  // handles change of stock on click on dashboard
  const handleClick = (stock) => {
//on click, stock will be set to click
    setStock(stock);
  }



  return (
		<Router>
			<div className='App'>
				<Nav />
		    <Switch>
          {/*this will make sure when you click on iStocks, it takes you home. exact path!!*/}
          <Route exact path='/' component={Homepage} />
					<Route path='/dashboard'>
            <Dashboard stockData={stockData} />
          </Route>
					<Route path='/about' component={About} />
          {/*this is the dashboard with a stock parameter passed in*/}
          <Route path='/stocks/:stock' 
          /*this will pass in all that fun routerProps stuff along with handleclick, which will manage clicking on*/
          /*the individual stocks, and will also pass the stock value from the useState instantiated above*/ 
                 render={routerProps => (<Stock handleClick={handleClick} 
                                                {...routerProps} 
                                                stockData={stockData} 
                                                />)}
                 />
        </Switch>
				</div>
		</Router>
	);
}

export default App;
