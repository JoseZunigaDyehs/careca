import { system } from 'styled-system'
import get from 'lodash/get'

export const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const setProperty = (property, value, isImportant) => {
  if (value === null) {
    return ``
  }
  return `${property}: ${value} ${isImportant ? `!important;` : ``}`
}

function getColorWithOpacity(value, theme) {
  if (!value) {
    return null
  }
  const [key, opacity = null] = value.split(`@`)
  const color = get(theme, key)
  if (color == null) {
    return key
  }
  return opacity == null ? color : hexToRgba(color, opacity)
}

export const colorsWithOpacity = system({
  color: {
    property: `color`,
    scale: `colors`,
    transform: getColorWithOpacity,
  },
  backgroundColor: {
    property: `backgroundColor`,
    scale: `colors`,
    transform: getColorWithOpacity,
  },
  borderColor: {
    property: `borderColor`,
    scale: `colors`,
    transform: getColorWithOpacity,
  },
})

export const backgroundGradient = system({
  backgroundGradient: {
    property: `background`,
    scale: `gradients`,
  },
})
