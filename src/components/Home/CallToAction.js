import React from 'react'
import styled from 'styled-components'
import Row from '../General/Grid/Row'
import Column from '../General/Grid/Column'
import Container from '../General/Grid/Container'
import Button from '../General/Buttons'
import Bean from '../General/Others/Bean'
import theme from '../../assets/positivaTheme'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

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
      stroke: ${({ theme }) => theme.colors.pink200};
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
      stroke: ${({ theme }) => theme.colors.pink300};
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
      stroke: ${({ theme }) => theme.colors.pink200};
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
      stroke: ${({ theme }) => theme.colors.pink300};
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
  const [ref, inView] = useInView({
    threshold: 0,
  })

  const headingAnimation = {
    hidden: {
      opacity: 0,
      y: '-5%',
    },
    visible: {
      opacity: 1,
      y: '0',
    },
  }

  return (
    <CallToAction ref={ref}>
      <Container fullWidth spacingY={6}>
        <Bean color={theme.colors.pink200} visible={inView} />
        <Bean color={theme.colors.pink300} visible={inView} />
        <Bean color={theme.colors.pink200} visible={inView} />
        <Bean color={theme.colors.pink300} visible={inView} />
        <Row>
          <Column sm={12} md={12} lg={12}>
            <motion.h2
              variants={headingAnimation}
              initial="hidden"
              animate={inView && 'visible'}
              transition={{
                default: { duration: 1, ease: 'easeInOut' },
              }}
            >
              ¿Listo para unirte?
            </motion.h2>
            <h3>Ayúdanos a desarrollar una plataforma útil para ti.</h3>
            <Button onClick={() => console.log('Open Modal')}>
              Unirme a la prueba beta
            </Button>
          </Column>
        </Row>
      </Container>
    </CallToAction>
  )
}

export default CTA
