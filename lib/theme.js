import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      fontFamily: 'Lato',
      bg: mode('#f0e7db', '#111112')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {}
}

const fonts = {
  heading: 'Lato'
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}
const shadows = {
  outline: `0 0 0 3px gray`
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  shadows
})
export default theme
