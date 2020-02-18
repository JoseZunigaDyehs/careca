import React from 'react'
import styled from 'styled-components'
import {
  compose,
  space,
  layout,
  color,
  typography,
  border,
  textStyle,
  system,
  position,
} from 'styled-system'
import { colorsWithOpacity } from 'utils'

const TypographyStyled = styled.h1`
  margin: 0;
  ${({ textOverflow, rotate }) =>
    textOverflow
      ? `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`
      : ``}
  ${({ rotate }) => (rotate ? `transform: rotate(${rotate});` : ``)} 
  ${compose(
    space,
    layout,
    color,
    typography,
    border,
    textStyle,
    colorsWithOpacity,
    position,
    system({ textDecoration: true }),
  )}
`
const Typo = ({ children, variant = `title`, ...props }) => {
  return (
    <TypographyStyled textStyle={variant} {...props}>
      {children}
    </TypographyStyled>
  )
}

TypographyStyled.defaultProps = {
  maxWidth: `100%`,
}
export default Typo
