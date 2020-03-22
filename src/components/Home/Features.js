import React from 'react'
import Container from '../General/Grid/Container'
import styled from 'styled-components'
import Feature from './Feature'
import { useStaticQuery, graphql } from 'gatsby'
import theme from '../../assets/positivaTheme'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledFeatures = styled.section`
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.black200};
    margin-bottom: 4.5rem;
    font-size: 1.75rem;
    line-height: 1.25;
    @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
      max-width: 350px;
      margin-left: auto;
      margin-right: auto;
    }
    strong {
      color: ${({ theme }) => theme.colors.pink300};
    }
    ::before {
      content: '';
      display: block;
      width: 4rem;
      height: 2px;
      background: ${({ theme }) => theme.colors.pink300};
      margin: 0 auto 1.5rem auto;
    }
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 7.5rem;
      :last-child {
        margin-bottom: 2rem;
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
        :nth-child(even) {
          > article {
            > div {
              > div:first-child {
                order: 2;
                margin-right: 0;
                margin-left: 1rem;
              }
              > div:last-child {
                order: 1;
                margin-left: 0;
                margin-right: 1rem;
              }
            }
          }
        }
      }
      @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
        :nth-child(even) {
          > article {
            > div {
              > div:first-child {
                margin-left: 3rem;
              }
              > div:last-child {
                margin-right: 3rem;
              }
            }
          }
        }
      }
    }
  }
`
/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Features = () => {
  const { protection, health, community } = useStaticQuery(graphql`
    {
      protection: file(relativePath: { eq: "smile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      health: file(relativePath: { eq: "health.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      community: file(relativePath: { eq: "community.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledFeatures>
      <Container spacingY={3}>
        <h2>
          Una app <strong>positiva</strong> para personas con VIH
        </h2>
        <ul>
          {/* Protegemos tu anonimato */}
          <li>
            <Feature
              img={protection.childImageSharp.fluid}
              beanColor={theme.colors.pink300}
              beanStyle={{
                transform: 'translate(10%, -12%)',
                stroke: theme.colors.pink300,
              }}
              alt="Persona sonriente frente al celular"
              title="Protegemos tu anonimato"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nam quas eos eaque iste voluptatum maxime molestiae temporibus
            adipisci placeat."
            />
          </li>
          {/* Toma el control de tu salud */}
          <li>
            <Feature
              img={health.childImageSharp.fluid}
              beanColor={theme.colors.pink200}
              beanStyle={{
                transform: 'translate(10%, -15%) rotate(180deg)',
                stroke: theme.colors.pink200,
              }}
              alt="Estetoscopio rosa"
              title="Toma el control de tu salud"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nam quas eos eaque iste voluptatum maxime molestiae temporibus
            adipisci placeat."
            />
          </li>
          {/* Únete a la comunidad */}
          <li>
            <Feature
              img={community.childImageSharp.fluid}
              beanColor={theme.colors.blue100}
              beanStyle={{
                transform: 'translate(10%, -15%) scaleX(-1) rotate(180deg)',
                stroke: theme.colors.blue100,
              }}
              alt="Comunidad positiva+"
              title="Únete a la comunidad"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nam quas eos eaque iste voluptatum maxime molestiae temporibus
            adipisci placeat."
            />
          </li>
        </ul>
      </Container>
    </StyledFeatures>
  )
}

export default Features
