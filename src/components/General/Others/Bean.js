import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Bean = ({ color, style = {}, visible = true }) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: color,
    },
  }

  return (
    <motion.svg
      fill="none"
      width="435"
      height="494"
      viewBox="0 0 435 494"
      style={style}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.12 94.687C40.922 5.4 282.6-4.167 368.079 98.851c85.479 103.018 26.887 357.958-48.778 365.896-75.664 7.938-93.095-158.209-129.413-203.73-36.318-45.521-206.57-77.043-177.768-166.33z"
        variants={icon}
        initial="hidden"
        animate={visible && 'visible'}
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  )
}

Bean.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Bean
