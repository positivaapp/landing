import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

/***************************/
/******** CSS IN JS ********/
/***************************/
const MotionButton = styled(motion.button)`
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
  }
`

const Button = props => {
  return (
    <MotionButton
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {props.children}
    </MotionButton>
  )
}

export default Button
