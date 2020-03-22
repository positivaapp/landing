import React from 'react'
import Row from '../General/Grid/Row'
import Column from '../General/Grid/Column'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Bean from '../General/Others/Bean'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledFeature = styled.article`
  > div {
    @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    /* Image Container */
    > div:first-child {
      position: relative;
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        margin-right: 1rem;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        margin-right: 3rem;
      }
      svg {
        position: absolute;
        z-index: -1;
        width: 18rem;
        height: auto;
        top: 0;
        left: 0;
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
        @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
          width: 20rem;
        }
      }
    }
    > div:last-child {
      margin-top: auto;
      margin-bottom: auto;
      h3 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        margin-left: 1rem;
        h3 {
          margin-top: 0;
          margin-bottom: 1.5rem;
        }
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        margin-left: 3rem;
        h3 {
          margin-top: 0;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`
const RoundedImg = styled(Image)`
  border-radius: 20px;
  height: 15rem;
  @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
    height: 16.5rem;
  }
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Feature = ({ img, alt, title, description, beanColor, beanStyle }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  return (
    <StyledFeature ref={ref}>
      <Row>
        <Column sm={12} md={6} lg={6}>
          <RoundedImg fluid={img} alt={alt} />
          <Bean color={beanColor} style={beanStyle} visible={inView} />
        </Column>
        <Column sm={12} md={6} lg={6}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Column>
      </Row>
    </StyledFeature>
  )
}

/***************************/
/******** PROPTYPES ********/
/***************************/
Feature.propTypes = {
  img: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  beanColor: PropTypes.string.isRequired,
  beanStyle: PropTypes.object,
}

export default Feature
