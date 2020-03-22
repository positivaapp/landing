import styled from 'styled-components'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const Container = styled.div`
  padding: ${props =>
    props.spacingY ? `${props.spacingY}rem 1.125rem` : '0 1.125rem'};
  max-width: ${props =>
    props.fullWidth ? '100%' : props.theme.spacing.maxWidth};
  margin: 0 auto;
`

/***************************/
/******** PROPTYPES ********/
/***************************/
Container.propTypes = {
  spacingY: PropTypes.number,
  fullWidth: PropTypes.bool,
}

export default Container
