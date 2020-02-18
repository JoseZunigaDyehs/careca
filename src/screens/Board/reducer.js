import { getRandomInt } from 'utils'
export const initialStates = {
  playersIds: [0, 1, 2, 3],
  players: {
    0: {
      name: 'PlayerA',
      crew: 'REPTS',
      handCardsIds: [],
      upBoardCardsIds: [],
      downBoardCardsIds: [],
    },
    1: {
      name: 'PlayerB',
      crew: 'REPTS',
      handCardsIds: [],
      upBoardCardsIds: [],
      downBoardCardsIds: [],
    },
    2: {
      name: 'PlayerC',
      crew: 'REPTS',
      handCardsIds: [],
      upBoardCardsIds: [],
      downBoardCardsIds: [],
    },
    3: {
      name: 'PlayerD',
      crew: 'REPTS',
      handCardsIds: [],
      upBoardCardsIds: [],
      downBoardCardsIds: [],
    },
  },
  name: 'LOS PIBES',
  isPlaying: false, //NOSE
  direction: 'right',
  timeToPlay: 10 * 1000,
  cardsInBoardIds: [],
  restCardsIds: [],
  playingId: null, // ID Jugador en Juego
  cardSelectId: null, //Carta seleccionada
  cardPlayedId: null, //ID Carta en juego
  scoreByPlayerId: null,
  error: false,
}
export const actionTypes = {
  FILL_DATA: 'FILL_DATA',
  START_BOARD: 'START_BOARD',
  PLAYED: 'PLAYED',
  SELECT_CARD: 'SELECT_CARD',
}
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FILL_DATA: {
      return {
        ...state,
        ...action.data,
      }
    }
    case actionTypes.START_BOARD: {
      const { cardsIds } = action
      const { playersIds, players } = state
      const nextPlayers = {}
      let nextrestCardsIdsIds = cardsIds
      //Reccorro los jugadores y 12 por cada carta de jugador
      playersIds.forEach(playerId => {
        const nextDownBoardCardsIds = []
        const nextUpBoardCardsIds = []
        const nextHandCardsIds = []
        for (let i = 0; i < 12; i++) {
          const randomIndex = getRandomInt(1, nextrestCardsIdsIds.length - 1)
          const randomId = nextrestCardsIdsIds[randomIndex]
          if (i < 4) {
            nextDownBoardCardsIds.push(randomId)
          } else if (i < 8) {
            nextUpBoardCardsIds.push(randomId)
          } else {
            nextHandCardsIds.push(randomId)
          }
          nextrestCardsIdsIds = nextrestCardsIdsIds.filter(x => x !== randomId)
        }
        nextPlayers[playerId] = {
          ...players[playerId],
          handCardsIds: nextHandCardsIds,
          upBoardCardsIds: nextUpBoardCardsIds,
          downBoardCardsIds: nextDownBoardCardsIds,
        }
      })
      const cardPlayedId = getRandomInt(1, nextrestCardsIdsIds.length - 1)
      nextrestCardsIdsIds = nextrestCardsIdsIds.filter(
        id => cardPlayedId !== id,
      )
      return {
        ...state,
        isPlaying: true,
        players: nextPlayers,
        cardsInBoardIds: [cardPlayedId],
        cardPlayedId,
        restCardsIds: nextrestCardsIdsIds,
      }
    }
    case actionTypes.PLAYED: {
      const { nextCardId, cards } = action
      const { cardPlayedId, playingId, direction } = state
      const { name } = cards[cardPlayedId]
      let nextPlayingId = playingId
      let nextDirection = direction
      let error = false
      //RULES
      switch (nextCardId) {
        case 'A': {
          if (name !== 'A' || name !== 'Joker' || name !== '2') {
            error = true
          }
          break
        }
        case '4': {
          error = true
          if (name === '3') {
            error = false
          }
          break
        }
        case '5': {
          error = true
          if (name === '3' || name === '4') {
            error = false
          }
          break
        }
        case '6': {
          error = true
          if (name === '3' || name === '4' || name === '5') {
            error = false
          }
          break
        }
        case '7': {
          if (
            name !== '6' ||
            name !== '5' ||
            name !== '4' ||
            name !== '3' ||
            name !== '2'
          ) {
            error = true
          } else {
            nextDirection = direction === 'right' ? 'left' : direction
          }
          break
        }
        case '8': {
          error = true
          if (
            name === '3' ||
            name === '4' ||
            name === '5' ||
            name === '6' ||
            name === '7'
          ) {
            error = false
          }
          break
        }
        case '9': {
          error = true
          if (
            name === '3' ||
            name === '4' ||
            name === '5' ||
            name === '6' ||
            name === '7' ||
            name === '8'
          ) {
            error = false
          }
          break
        }
        case 'J': {
          if (
            name !== 'J' ||
            name !== 'Q' ||
            name !== 'K' ||
            name !== 'A' ||
            name !== 'Joker'
          ) {
            error = true
          }
          break
        }
        case 'Q': {
          if (
            name !== 'Q' ||
            name !== 'K' ||
            name !== 'A' ||
            name !== 'Joker'
          ) {
            error = true
          }
          break
        }
        case 'K': {
          if (name !== 'K' || name !== 'A' || name !== 'Joker') {
            error = true
          }
          break
        }
        case 'Joker': {
          if (name !== 'Joker') {
            error = true
          }
          break
        }
        default: {
        }
      }
      return {
        ...state,
        error,
        timeToPlay: 3000,
        direction: nextDirection,
        playingId: error ? playingId : nextPlayingId,
      }
    }
    case actionTypes.SELECT_CARD: {
      const { id } = action
      return {
        ...state,
        cardSelectId: id,
      }
    }
    default: {
      return state
    }
  }
}
