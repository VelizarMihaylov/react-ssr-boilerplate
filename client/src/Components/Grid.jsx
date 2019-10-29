/** @jsx jsx */
import { jsx } from '@emotion/core'

import { gridWeight, gridUnits, tabletAndUp } from './baseline-grid'

// Grid mixin. Automatically adds styles to child elements to avoid having to add
// 'grid child' to every child container. By default child containers have equal weight
// use the `gridWeight` mixin to set different width columns.
//
// ```js
// const gridChild = style.div`
//   && {
//     ${gridWeight(8)}
//   }
// `
// ```
// Note the use of && to increase specificity and override the nested styles

const Style = {
  display: 'flex',
  justifyContent: 'space-between',
  flexFlow: 'column wrap',
  ...tabletAndUp({
    flexFlow:
    'row wrap',
    '> *': {
      ...gridWeight(4),
      margin: `0 ${gridUnits(0.5)}rem`,
      firstChild: {
        marginLeft: 0
      },
      lastChild: {
        marginRight: 0
      }
    }
  })
}

const Grid = props =>
  <div {...props} css={Style}>
    {props.children}
  </div>


export default Grid
