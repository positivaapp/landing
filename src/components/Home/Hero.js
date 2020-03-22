import React from 'react'
import styled from 'styled-components'
import Row from '../General/Grid/Row'
import Column from '../General/Grid/Column'
import Container from '../General/Grid/Container'
import Outline from '../General/Typography/Titles'
import theme from '../../assets/positivaTheme'
import Button from '../General/Buttons'
import illustration from '../../assets/images/Illustration.svg'
import Bean from '../General/Others/Bean'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledHero = styled.header`
  > div {
    /* Both Columns */
    > div {
      min-height: 28rem;
      display: flex;
      align-items: center;
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        min-height: 32rem;
      }
    }
    /* First Column */
    > div:first-child {
      background: ${({ theme }) => theme.colors.pink200};
      color: ${({ theme }) => theme.colors.pink300};
      h1 {
        font-size: 2.5rem;
        line-height: 1;
        font-weight: 700;
        margin-bottom: 1.25rem;
        letter-spacing: -0.0225rem;
      }
      h2 {
        font-size: 1.175rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 1.5rem;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        padding: 3rem;
        h1 {
          font-size: 3rem;
        }
      }
    }
    /* Second Column */
    > div:last-child {
      background: ${({ theme }) => theme.colors.pink100};
      position: relative;
      overflow: hidden;
      > svg {
        position: absolute;
        width: 20rem;
        @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
          width: 23rem;
        }
      }
      > svg:first-child {
        bottom: -75%;
        left: -50%;
        @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
          bottom: -50%;
          left: -30%;
        }
        @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
          bottom: -55%;
          left: -35%;
        }
      }
      > svg:nth-child(2) {
        bottom: -80%;
        left: -55%;
        @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
          bottom: -55%;
          left: -35%;
        }
        @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
          bottom: -60%;
          left: -40%;
        }
      }
      > svg:nth-child(3) {
        top: -55%;
        right: -33%;
        @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
          top: -25%;
          right: -27%;
        }
        @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
          top: -30%;
          right: -32%;
        }
      }
      > svg:nth-child(4) {
        top: -60%;
        right: -38%;
        @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
          top: -30%;
          right: -32%;
        }
        @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
          top: -35%;
          right: -37%;
        }
      }
      img {
        width: 100%;
        padding-left: 4.5rem;
        padding-right: 4.5rem;
        @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
          padding-right: 6.5rem;
          padding-left: 6.5rem;
        }
      }
    }
  }
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Hero = () => {
  return (
    <StyledHero>
      <Row colGap={0}>
        <Column sm={12} md={12} lg={6}>
          <Container>
            <h1>
              Salud estable y vida{' '}
              <Outline color={theme.colors.pink300} width={1.125}>
                positiva
              </Outline>
            </h1>
            <h2>
              Una plataforma segura para monitorear tu salud y encontrar apoyo.
            </h2>
            <Button onClick={() => console.log('Open Modal')}>
              Unirme a la prueba beta
            </Button>
          </Container>
        </Column>
        <Column sm={12} md={12} lg={6}>
          <Bean color={theme.colors.pink200} />
          <Bean color={theme.colors.pink300} />
          <Bean color={theme.colors.pink300} />
          <Bean color={theme.colors.pink200} />
          <Container>
            <img
              src={illustration}
              alt="Persona organizando su próxima cita con la app de positiva"
            />
          </Container>
        </Column>
      </Row>
    </StyledHero>
  )
}

export default Hero
