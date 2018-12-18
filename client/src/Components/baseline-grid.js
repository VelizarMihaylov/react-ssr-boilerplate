export const pixelsPerRem = 16
export const gridLineHeight = 1.5
export const gridUnitSize = gridLineHeight

export const gridUnits = factor => factor * gridUnitSize

const columns = 12
const gridUnitsPerColumn = 3
const columnWidthInGridUnits = gridUnitSize * gridUnitsPerColumn

export const layoutWidth = columns * columnWidthInGridUnits + ((columns - 1) * gridUnitSize)

const tabletBreakpointInPx = 768

export const tabletAndUp = props => ({
  [`@media(min-width: ${tabletBreakpointInPx / pixelsPerRem}rem)`]: props
})
export const maxWidthAndUp = props => ({
  [`@media(min-width: ${layoutWidth}rem)`]: props
})

export const contentContainer = {
  maxWidth: `${layoutWidth}rem`,
  ...tabletAndUp
}

export const gridWeight = (weight = 4) => ({
  flex: `${weight} 1 0`
})
