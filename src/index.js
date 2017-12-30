import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
					<div>
						<div className="text-red">
							homepage3
						</div>
					</div>
        )
    }
}

ReactDOM.render(
  <App/>,
	app
)

if (module.hot) {
	module.hot.accept();
}
