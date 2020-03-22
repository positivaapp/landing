import React from 'react'
import styled from 'styled-components'
import Row from '../General/Grid/Row'
import Column from '../General/Grid/Column'
import Container from '../General/Grid/Container'
import Outline from '../General/Typography/Titles'
import theme from '../../assets/positivaTheme'
import Button from '../General/Buttons'
import illustration from '../../assets/images/Illustration.svg'

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
            <Button onClick={() => alert('Modal Open')}>
              Unirme a la prueba beta
            </Button>
          </Container>
        </Column>
        <Column sm={12} md={12} lg={6}>
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
