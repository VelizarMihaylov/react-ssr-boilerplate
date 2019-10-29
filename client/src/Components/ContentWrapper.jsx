/** @jsx jsx */
import { jsx } from '@emotion/core'

import { gridUnits, layoutWidth, maxWidthAndUp } from './baseline-grid'


const Style = {
  margin: `0 ${gridUnits(0.5)}rem`,
  maxWidth: `${layoutWidth}rem`,
  ...maxWidthAndUp({
    margin: '0 auto'
  })
}

const ContentWrapper = props =>
  <div {...props} css={Style}>
    {props.children}
  </div>

export default ContentWrapper
