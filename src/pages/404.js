import React from 'react'
import Layout from '../components/General/Layout'
import Container from '../components/General/Grid/Container'
import Row from '../components/General/Grid/Row'
import Column from '../components/General/Grid/Column'
import Button from '../components/General/Buttons'
import styled from 'styled-components'
import { navigateTo } from 'gatsby'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledError = styled.main`
  background: ${({ theme }) => theme.colors.pink100};
  text-align: center;
  h1,
  h2 {
    color: ${({ theme }) => theme.colors.pink300};
  }
  h1 {
    font-size: 8rem;
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
      font-size: 10rem;
    }
  }
  h2 {
    margin-bottom: 2rem;
  }
  @keyframes blink {
    0% {
      color: ${({ theme }) => theme.colors.pink300};
    }
    50% {
      color: ${({ theme }) => theme.colors.blue100};
    }
    100% {
      color: ${({ theme }) => theme.colors.pink300};
    }
  }
`
/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const index = () => {
  return (
    <Layout>
      <StyledError>
        <Container spacingY={6}>
          <Row>
            <Column sm={12}>
              <h1>404</h1>
              <h2>La página que buscas no existe</h2>
              <Button onClick={() => navigateTo('/')}>Regresa a inicio</Button>
            </Column>
          </Row>
        </Container>
      </StyledError>
    </Layout>
  )
}

export default index
