import React from 'react'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  flexbox,
  layout,
  border,
  position,
  typography,
  system,
  buttonStyle,
} from 'styled-system'
import { backgroundGradient } from 'utils'

const ButtonStyled = styled.button`
  ${compose(
    space,
    color,
    layout,
    border,
    position,
    typography,
    system({ textDecoration: true }),
    backgroundGradient,
    flexbox,
    buttonStyle,
  )}
  ${({ withShadow = false, disabled = false }) => `
  ${withShadow ? `box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3) !important;` : ``}
  ${disabled ? `cursor: no-drop !important` : ``}
  `}
`

ButtonStyled.defaultProps = {
  border: `none`,
  borderRadius: `4px`,
  maxWidth: `100%`,
  fontSize: `3`,
  height: `1`,
  textDecoration: `underline`,
  cursor: `pointer`,
}

const Button = ({ children, buttonStyle = `buttonPrimary`, ...props }) => {
  return (
    <ButtonStyled variant={buttonStyle} {...props}>
      {children}
    </ButtonStyled>
  )
}

export default Button
