import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../../../assets/positivaTheme'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import Footer from './Footer'

/***************************/
/******** CSS IN JS ********/
/***************************/
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 14.75px;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    line-height: 1.325;
    color: ${({ theme }) => theme.colors.black100};
    letter-spacing: -0.0275rem;
  }
  ::selection {
    background: ${({ theme }) => theme.colors.pink200};
    color: ${({ theme }) => theme.colors.pink300};
    -webkit-text-stroke-width: 0 !important;
  }
 @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
    html {
      font-size: 18px;
    }
  }
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

/***************************/
/******** PROPTYPES ********/
/***************************/
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
