import React from 'react'
import Container from '../Grid/Container'
import Brand from './Brand'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../../assets/positivaTheme'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Navbar = () => {
  return (
    <StyledNavbar>
      <Container fullWidth spacingY={1.125}>
        <Link to="/">
          <Brand color={theme.colors.blue100} />
        </Link>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar
