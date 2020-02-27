import React from 'react'
import Container from './Container'

const playerStyles = {
  // From bottom to clock
  0: {
    bottom: '0',
    left: 'calc(50% - 9rem)',
  },
  1: {
    top: 'calc(50% - 3rem)',
    left: '-6rem',
    transform: 'rotate(90deg)',
  },
  2: {
    top: '0',
    left: 'calc(50% - 9rem)',
    transform: 'rotate(180deg)',
  },
  3: {
    top: 'calc(50% - 3rem)',
    right: '-6rem',
    transform: 'rotate(-90deg)',
  },
}

function BoardWrapper({ position, children }) {
  return (
    <Container
      height="6rem"
      width="18rem"
      position="absolute"
      justifyContent="center"
      alignItems="center"
      borderRadius="8px"
      padding="2"
      color="white"
      {...playerStyles[position]}
    >
      {children}
    </Container>
  )
}

export default BoardWrapper
