/** @jsx jsx */
import { jsx } from '@emotion/core'

import { gridUnits } from './baseline-grid'
import ContentWrapper from './ContentWrapper'

const Style = {
  marginBottom: `${gridUnits(1)}rem`
}


const PageSection = props =>
  <section ccs={Style}>
    <ContentWrapper>
      {props.children}
    </ContentWrapper>
  </section>

export default PageSection
