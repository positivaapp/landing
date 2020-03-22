import styled from 'styled-components'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${({ colGap }) => String(colGap) || '0.5'}rem;
  grid-row-gap: ${({ rowGap }) => String(rowGap) || '0.5'}rem;
`
/***************************/
/******** PROPTYPES ********/
/***************************/
Row.propTypes = {
  colGap: PropTypes.number,
  rowGap: PropTypes.number,
}

export default Row
