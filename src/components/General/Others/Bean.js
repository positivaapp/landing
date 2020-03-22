import React from 'react'
import PropTypes from 'prop-types'

const Bean = ({ color, style = {} }) => (
  <svg fill="none" width="435" height="494" viewBox="0 0 435 494" style={style}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.12 94.687C40.922 5.4 282.6-4.167 368.079 98.851c85.479 103.018 26.887 357.958-48.778 365.896-75.664 7.938-93.095-158.209-129.413-203.73-36.318-45.521-206.57-77.043-177.768-166.33z"
      fill={color}
    />
  </svg>
)

Bean.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Bean
