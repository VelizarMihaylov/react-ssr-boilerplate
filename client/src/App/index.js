import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

if (!module.hot) {
  ReactDOM.hydrate(
    <App />,
    document.getElementById('root')
  )
}

if (module.hot) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    )
  })
}
