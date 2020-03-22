import styled from 'styled-components'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const Outline = styled.span`
  color: transparent;
  -webkit-text-stroke-color: ${({ color, theme }) =>
    color || theme.colors.black100};
  -webkit-text-stroke-width: ${({ width }) => Number(width) || 1}px;
`

/***************************/
/******** PROPTYPES ********/
/***************************/
Outline.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
}

export default Outline
