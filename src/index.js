import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.less'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route component={NoMatch}/>
		</Switch>
	</Router>
)

ReactDOM.render(
  <App/>,
	app
)

if (module.hot) {
	module.hot.accept();
}
