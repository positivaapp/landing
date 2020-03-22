import React from 'react'
import styled from 'styled-components'
import Row from '../General/Grid/Row'
import Column from '../General/Grid/Column'
import Container from '../General/Grid/Container'
import Button from '../General/Buttons'

/***************************/
/******** CSS IN JS ********/
/***************************/
const CallToAction = styled.section`
  background: ${({ theme }) => theme.colors.pink100};
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.pink300};
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    ::before {
      content: '';
      display: block;
      width: 4rem;
      height: 2px;
      background: ${({ theme }) => theme.colors.pink300};
      margin: 0 auto 1.5rem auto;
    }
    @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
      font-size: 2.5rem;
    }
  }
  h3 {
    color: ${({ theme }) => theme.colors.pink300};
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const CTA = () => {
  return (
    <CallToAction>
      <Container spacingY={6}>
        <Row>
          <Column sm={12} md={12} lg={12}>
            <h2>¿Listo para unirte?</h2>
            <h3>Ayúdanos a desarrollar una plataforma útil para ti.</h3>
            <Button onClick={() => alert('Modal Open')}>
              Unirme a la prueba beta
            </Button>
          </Column>
        </Row>
      </Container>
    </CallToAction>
  )
}

export default CTA
