const colors = {
  primary: [`#212121`, `#A0C63C`, `#4a9610`],
  secondary: [`#60BDB4`, `#64B5C0`, `#A6E2E2`, `#d7e8eb`],
  gray: [`#f5f4f3`, `#EEEDEC`, `#C0BFC0`, `#9EA2A8`, `#4A4A4A`],
  error: `#D0021B`,
  success: `#328A0E`,
}
//                  0,  1,  2,  3,  4,  5,  6,  7,  8,  9
const fontSizes = [12, 14, 16, 18, 20, 24, 32, 42, 46, 60]

// 0: light, 1: regular, 2: medium, 3: bold
const fontWeights = [100, 400, 700, 900]

//             0, 1, 2,  3,  4,  5,   6,  7,  8,  9,
const space = [0, 4, 8, 16, 24, 32, 64, 128, 224, 360]

//             0,  1,  2,  ,3   ,4   ,5  ,6
const sizes = [45, 60, 64, 70, 100, 224, 360]

const breakpoints = [`1279px`, `1439px`, `1919px`, `3839px`]

const textStyles = {
  Diamons: {
    color: colors.error,
  },
  Clubs: {
    color: 'black',
  }, //Trebol
  Hearts: {
    color: colors.error,
  },
  Spades: {
    color: 'black',
  }, //Pica
  specialTitle: {
    fontWeight: fontWeights[2],
    fontSize: fontSizes[6],
  },
  title1: {
    fontWeight: fontWeights[2],
    fontSize: fontSizes[4],
    color: colors.primary[2],
    marginTop: space[4],
    marginBottom: space[3],
    marginLeft: space[4],
  },
  link: {
    fontWeight: fontWeights[2],
    fontSize: fontSizes[1],
    backgroundColor: `transparent`,
  },
  error: {
    fontWeight: fontWeights[2],
    margin: space[0],
    color: colors.error,
    textAlign: `end`,
    width: `100%`,
    fontSize: fontSizes[0],
    marginTop: space[1],
  },
}

const buttons = {
  buttonSuccess: {
    backgroundColor: colors.success,
    color: `white`,
    padding: `${space[3]}px ${space[4]}px`,
  },
  buttonLink: {
    backgroundColor: `transparent`,
    color: colors.gray[3],
    padding: `0`,
  },
  buttonMenuLink: {
    backgroundColor: `transparent`,
    color: `white`,
    padding: `0`,
  },
  buttonPrimary: {
    backgroundColor: colors.primary[2],
    color: `white`,
    padding: `${space[3]}px ${space[4]}px`,
  },
  buttonIcon: {
    backgroundColor: `transparent`,
    padding: `0`,
    margin: `0`,
  },
}

const gradients = [
  `radial-gradient(100% 100% at 50% 44.85%, #F8F8F8 30%, ${colors.primary[1]} 100%)`,
  `linear-gradient(180deg, ${colors.primary[2]} 0%, ${colors.primary[0]} 100%)`,
]

export default {
  colors,
  fontSizes,
  breakpoints,
  textStyles,
  buttons,
  space,
  gradients,
  sizes,
  logo: `https://logos-clientes-saltala.s3-us-west-2.amazonaws.com/redsalud/red_salud.png`,
}
