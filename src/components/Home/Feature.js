import React from 'react'
import Row from '../General/Grid/Row'
import Column from '../General/Grid/Column'
import styled from 'styled-components'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledFeature = styled.article`
  > div {
    @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    > div:first-child {
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        margin-right: 1rem;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        margin-right: 3rem;
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
const Feature = ({ img, alt, title, description }) => {
  return (
    <StyledFeature>
      <Row>
        <Column sm={12} md={6} lg={6}>
          <RoundedImg fluid={img} alt={alt} />
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
}

export default Feature
