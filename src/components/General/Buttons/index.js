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
  cursor: pointer;
`

export default Button
