import styled from 'styled-components'
import {
  compose,
  background,
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  grid,
  typography,
  variant,
  tra,
} from 'styled-system'
import { setProperty, backgroundGradient, colorsWithOpacity } from 'utils'
const Container = styled.div`
  ${compose(
    background,
    space,
    color,
    layout,
    flexbox,
    border,
    position,
    grid,
    typography,
    backgroundGradient,
    colorsWithOpacity,
  )}
  ${variant({
    variants: {
      triangle: {
        position: `absolute`,
        width: `0`,
        height: `0`,
        borderLeft: `15px solid transparent`,
        borderRight: `15px solid transparent`,
        borderBottom: `20px solid white`,
        bottom: `-12px`,
        zIndex: `200`,
      },
    },
  })}
  ${({
    withShadow = false,
    overflowY = null,
    onClick = null,
    transform = null,
  }) => `
  ${setProperty(`overflow-y`, overflowY)}
	${withShadow ? `box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3) !important;` : ``}
	${transform ? `transform: ${transform};` : ``}
  ${onClick == null ? `` : `  cursor: pointer`};
  `}
`
Container.defaultProps = {
  display: `flex`,
  flexDirection: `row`,
  flexWrap: `wrap`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  maxWidth: `100%`,
}

export default Container
