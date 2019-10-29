/** @jsx jsx */
import { jsx } from '@emotion/core'
import { gridUnits } from './baseline-grid'

const baseStyleIntent = {
  none: {
    color: 'black',
    border: `${gridUnits(0.1)}rem solid black`
  },
  success: {
    color: 'green',
    border: `${gridUnits(0.1)}rem solid green`
  },
  danger: {
    color: 'red',
    border: `${gridUnits(0.1)}rem solid red`
  }
}

const primaryStyleIntent = {
  none: {
    backgroundColor: 'blue'
  },
  success: {
    backgroundColor: 'green'
  },
  danger: {
    backgroundColor: 'red'
  }
}

const base = ({ intent } = {}) => ({
  ...baseStyleIntent[intent],
  borderRadius: `${gridUnits(0.2)}rem`,
  fontWeight: 'bold',
  height: `${gridUnits(1.5)}rem`,
  letterSpacing: '0.05rem',
  lineHeight: `${gridUnits(1)}rem`,
  margin: `${gridUnits(0.5)}rem 0`,
  padding: `0 ${gridUnits(0.6)}rem`
})

const primary = ({ intent } = {}) => ({
  ...base(),
  ...primaryStyleIntent[intent],
  color: 'white',
  border: 'none'
})

const Styles = {
  base,
  primary
}

const Button = ({ appearance = 'base', intent = 'none', ...props }) =>
  <button
    css={Styles[appearance]({ intent })}
  >
    {props.text}
  </button>

export default Button
