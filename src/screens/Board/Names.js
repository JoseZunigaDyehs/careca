import React from 'react'
import { Typography } from 'components'

function Names({ players, player, position }) {
  if (position === 2) {
    return (
      <>
        <Typography fontSize="0" marginLeft="1" rotate={'180deg'}>
          {players[player].crew}
        </Typography>
        <Typography fontWeight="700" position="relative" rotate={'180deg'}>
          {players[player].name}
        </Typography>
      </>
    )
  }
  return (
    <>
      <Typography fontWeight="700" position="relative">
        {players[player].name}
      </Typography>
      <Typography fontSize="0" marginLeft="1">
        {players[player].crew}
      </Typography>
    </>
  )
}

export default Names
