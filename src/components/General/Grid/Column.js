import styled from 'styled-components'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const Column = styled.div`
  grid-column: span ${({ sm }) => sm};
  @media (min-width: ${({ theme }) => theme.mediaqueries.md}) {
    grid-column: span ${({ md, sm }) => md || sm};
  }
  @media (min-width: ${({ theme }) => theme.mediaqueries.lg}) {
    grid-column: span ${({ lg, md, sm }) => lg || md || sm};
  }
`
/***************************/
/******** PROPTYPES ********/
/***************************/
Column.propTypes = {
  sm: PropTypes.number.isRequired,
  md: PropTypes.number,
  lg: PropTypes.number,
}

export default Column
