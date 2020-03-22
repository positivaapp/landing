import React from 'react'
import styled from 'styled-components'
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Brand from './Brand'
import theme from '../../../assets/positivaTheme'
import footerLinks from '../../../assets/constants/footerLinks.json'
import { Link } from 'gatsby'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.blue100};
  color: ${({ theme }) => theme.colors.white200};
  /* Container */
  > div {
    /* Rows */
    > div:first-child {
      /* Brand Column */
      > div {
        margin-bottom: 2rem;
      }
    }
    /* Mail + Quote Row */
    > div:nth-child(2) {
      margin-bottom: 3rem;
      /* Mail */
      > div:first-child {
        p {
          color: ${({ theme }) => theme.colors.white100};
          margin-bottom: 0.25rem;
        }
        h4 {
          font-size: 1.75rem;
          @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
            font-size: 2rem;
          }
          a {
            color: ${({ theme }) => theme.colors.white200};
            text-decoration: none;
            :hover {
              text-decoration: none;
              color: ${({ theme }) => theme.colors.white100};
            }
          }
        }
      }
      /* Quote */
      > div:last-child {
        display: none;
        @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
          display: block;
        }
        blockquote {
          color: ${({ theme }) => theme.colors.white100};
          line-height: 1.5;
        }
      }
    }
    /* Links */
    > div:last-child {
      /* Social + Legal */
      > div {
        nav {
          ul {
            list-style: none;
            li {
              margin-bottom: 1rem;
              @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
                display: inline-block;
                margin-right: 1rem;
                margin-bottom: 0;
              }
              :last-child {
                margin-right: 0;
              }
              a {
                color: ${({ theme }) => theme.colors.white200};
                text-decoration: none;
                font-weight: 600;
                :hover {
                  text-decoration: none;
                  color: ${({ theme }) => theme.colors.white100};
                }
              }
            }
          }
        }
      }
      > div:last-child {
        @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
          text-align: right;
        }
      }
    }
  }
`

/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Footer = () => {
  return (
    <StyledFooter>
      <Container spacingY={6}>
        <Row>
          <Column sm={12} md={12} lg={12}>
            <Link aria-current="page" to="/">
              <Brand color={theme.colors.white200} />
            </Link>
          </Column>
        </Row>
        <Row>
          <Column sm={12} md={12} lg={6}>
            <p>¿Tienes preguntas?</p>
            <h4>
              <a href="mailto:hola@positiva-app.com">hola@positiva-app.com</a>
            </h4>
          </Column>
          <Column sm={12} md={12} lg={6}>
            <blockquote>
              "Aplaudo a los valientes que viven abiertamente con el VIH, que
              abogan sin descanso por los derechos de los seropositivos y que
              instruyen a otros respecto del SIDA." <br /> - Ban Ki-moon, ex
              Secretario de las Naciones Unidas.
            </blockquote>
          </Column>
        </Row>
        <Row>
          <Column sm={12} md={4} lg={6}>
            <nav>
              <ul>
                {footerLinks.social.map(({ name, path }) => (
                  <li key={name}>
                    <a href={path} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Column>
          <Column sm={12} md={8} lg={6}>
            <nav>
              <ul>
                {footerLinks.legal.map(({ name, path }) => (
                  <li key={name}>
                    <Link aria-current="page" to={path}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Column>
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer
