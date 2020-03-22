import React from 'react'
import styled from 'styled-components'
import Row from '../General/Grid/Row'
import Column from '../General/Grid/Column'
import Container from '../General/Grid/Container'
import Button from '../General/Buttons'
import Bean from '../General/Others/Bean'
import theme from '../../assets/positivaTheme'

/***************************/
/******** CSS IN JS ********/
/***************************/
const CallToAction = styled.section`
  background: ${({ theme }) => theme.colors.pink100};
  text-align: center;
  > div {
    position: relative;
    overflow: hidden;
    > svg {
      width: 20rem;
      height: auto;
      position: absolute;
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        width: 28rem;
      }
    }
    > svg:first-child {
      bottom: -60%;
      left: -50%;
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        bottom: -90%;
        left: -40%;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        bottom: -65%;
        left: -15%;
      }
    }
    > svg:nth-child(2) {
      bottom: -65%;
      left: -55%;
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        bottom: -95%;
        left: -45%;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        bottom: -70%;
        left: -20%;
      }
    }
    > svg:nth-child(3) {
      top: -42%;
      right: -38%;
      z-index: 2;
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        top: -45%;
        right: -35%;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        top: -35%;
        right: -20%;
      }
    }
    > svg:nth-child(4) {
      top: -36%;
      right: -33%;
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        top: -40%;
        right: -30%;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        top: -32%;
        right: -15%;
      }
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.pink300};
    font-size: 2rem;
    font-weight: 600;
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
      <Container fullWidth spacingY={6}>
        <Bean color={theme.colors.pink200} />
        <Bean color={theme.colors.pink300} />
        <Bean color={theme.colors.pink200} />
        <Bean color={theme.colors.pink300} />
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