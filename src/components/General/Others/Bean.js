import React from 'react'
import theme from '../../../assets/positivaTheme'

const Bean = ({ color = theme?.colors?.pink200 || '#000' }) => {
  return (
    <svg
      width="260"
      height="202"
      viewBox="0 0 260 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.83247 -147.559C38.997 -222.512 249.855 -208.794 314.734 -111.493C379.614 -14.192 305.466 201.975 239 201.975C172.534 201.975 172.534 56.0267 145.128 13.1644C117.722 -29.6978 -27.332 -72.6058 5.83247 -147.559Z"
        fill={color}
      />
    </svg>
  )
}

export default Bean
