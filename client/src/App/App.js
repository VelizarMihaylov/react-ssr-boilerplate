/** @jsx jsx */
import baseStyles from 'Components/base-styles'
import { jsx, Global } from '@emotion/core'

const App = props =>
  <div>
    <Global style={baseStyles} />
    <h1 style={{ color: 'purple' }}>React SSR Demo</h1>
    <p>A simple react app example with server side rendering</p>
  </div>

export default App
