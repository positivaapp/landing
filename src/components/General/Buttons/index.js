import styled from 'styled-components'

/***************************/
/******** CSS IN JS ********/
/***************************/
const Button = styled.button`
  color: ${({ theme }) => theme.colors.white200};
  background: ${({ theme }) => theme.colors.blue100};
  text-transform: uppercase;
  font-size: 0.775rem;
  letter-spacing: 0.175rem;
  text-decoration: none;
  padding: 1rem 1.5rem;
  display: inline-block;
  border-radius: 0.3125rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-out;
  :hover,
  :active,
  :focus {
    background: ${({ theme }) => theme.colors.blue200};
    box-shadow: 0px 3px 1px -2px rgba(33, 29, 127, 0.2),
      0px 2px 2px 0px rgba(33, 29, 127, 0.14),
      0px 1px 5px 0px rgba(33, 29, 127, 0.12);
    transform: scale(1.01);
  }
`

export default Button
