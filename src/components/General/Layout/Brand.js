import React from 'react'
import styled from 'styled-components'
import theme from '../../../assets/positivaTheme'
import PropTypes from 'prop-types'

/***************************/
/******** CSS IN JS ********/
/***************************/
const StyledBrand = styled.svg`
  height: 1.375rem;
  width: auto;
`
/***************************/
/***** MAIN COMPONENT ******/
/***************************/
const Brand = ({ color = theme?.colors?.pink300 || '#000' }) => {
  return (
    <StyledBrand
      width="137"
      height="33"
      viewBox="0 0 137 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.88508 13.954H11.5969C11.812 13.5722 12.0701 13.2172 12.371 12.8891C13.4511 11.7385 14.8256 11.1632 16.4947 11.1632C17.6238 11.1632 18.6179 11.4325 19.477 11.9711C20.3361 12.4852 21.0111 13.2073 21.5021 14.1376C21.993 15.0679 22.2384 16.1328 22.2384 17.3323C22.2384 19.1684 21.6984 20.6617 20.6184 21.8123C20.3865 22.0541 20.1411 22.2699 19.882 22.4598V26.5222C20.5909 26.3218 21.2536 26.037 21.8703 25.668C23.2203 24.8357 24.2757 23.7096 25.0366 22.2897C25.8221 20.8453 26.2148 19.2051 26.2148 17.3691C26.2148 15.533 25.8221 13.8928 25.0366 12.4484C24.2757 11.0041 23.2203 9.86573 21.8703 9.03338C20.5202 8.20104 18.9616 7.78487 17.1943 7.78487C15.5743 7.78487 14.2488 8.11536 13.2179 8.77633C12.187 9.43731 11.3769 10.1962 10.7879 11.053L10.3828 8.22552H6.88508V13.954Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.897 25.7047C35.2961 26.4881 36.867 26.8798 38.6098 26.8798C40.3525 26.8798 41.9234 26.4881 43.3226 25.7047C44.7217 24.8969 45.8262 23.783 46.6362 22.3631C47.4708 20.9188 47.8881 19.2418 47.8881 17.3323C47.8881 15.4228 47.4708 13.7582 46.6362 12.3383C45.8262 10.8939 44.7217 9.78004 43.3226 8.99666C41.948 8.1888 40.3893 7.78487 38.6466 7.78487C36.9284 7.78487 35.3697 8.1888 33.9706 8.99666C32.5715 9.78004 31.4547 10.8939 30.6201 12.3383C29.8101 13.7582 29.4051 15.4228 29.4051 17.3323C29.4051 19.2418 29.8101 20.9188 30.6201 22.3631C31.4301 23.783 32.5224 24.8969 33.897 25.7047ZM41.1871 22.8405C40.4016 23.3056 39.5425 23.5382 38.6098 23.5382C37.677 23.5382 36.8179 23.3056 36.0325 22.8405C35.247 22.3754 34.6088 21.6899 34.1179 20.7841C33.627 19.8539 33.3815 18.7033 33.3815 17.3323C33.3815 15.9614 33.627 14.8231 34.1179 13.9173C34.6088 12.987 35.247 12.2893 36.0325 11.8242C36.8425 11.359 37.7139 11.1265 38.6466 11.1265C39.5793 11.1265 40.4384 11.359 41.2239 11.8242C42.0339 12.2893 42.6721 12.987 43.1385 13.9173C43.6294 14.8231 43.8748 15.9614 43.8748 17.3323C43.8748 18.7033 43.6294 19.8539 43.1385 20.7841C42.6475 21.6899 41.9971 22.3754 41.1871 22.8405Z"
        fill={color}
      />
      <path
        d="M53.3237 25.1907C54.821 26.3168 56.7233 26.8798 59.0306 26.8798C61.2888 26.8798 63.0684 26.329 64.3693 25.2274C65.6947 24.1257 66.3452 22.7426 66.3207 21.0779C66.3207 19.7559 66.0016 18.7522 65.3634 18.0668C64.7252 17.3813 63.8784 16.8672 62.8229 16.5245C61.792 16.1573 60.6629 15.839 59.4356 15.5697C58.2083 15.276 57.2142 14.9455 56.4533 14.5783C55.7169 14.2111 55.3487 13.7092 55.3487 13.0727C55.3487 12.4362 55.6187 11.9221 56.1587 11.5304C56.6987 11.1142 57.4596 10.9062 58.4415 10.9062C59.4479 10.9062 60.2456 11.1265 60.8347 11.5671C61.4483 12.0078 61.8165 12.6198 61.9392 13.4032H65.6947C65.4738 11.6161 64.7252 10.2329 63.4488 9.25371C62.197 8.27448 60.5524 7.78487 58.5151 7.78487C56.306 7.78487 54.5878 8.32344 53.3605 9.40059C52.1332 10.4533 51.5196 11.7752 51.5196 13.3665C51.5196 14.5171 51.8509 15.4351 52.5137 16.1205C53.201 16.7815 54.0478 17.2956 55.0542 17.6628C56.0851 18.03 57.116 18.3238 58.1469 18.5441C59.4724 18.8134 60.5033 19.1194 61.2397 19.4622C62.0006 19.7804 62.3811 20.4047 62.3811 21.3349C62.3811 21.9714 62.1111 22.5345 61.5711 23.0241C61.0311 23.5137 60.172 23.7585 58.9938 23.7585C57.791 23.7585 56.8215 23.4648 56.0851 22.8772C55.3487 22.2652 54.8823 21.543 54.686 20.7107H50.7464C50.9673 22.5712 51.8264 24.0645 53.3237 25.1907Z"
        fill={color}
      />
      <path
        d="M70.5813 4.11276C71.0722 4.55341 71.6858 4.77374 72.4222 4.77374C73.1586 4.77374 73.7599 4.55341 74.2263 4.11276C74.7172 3.64763 74.9627 3.07233 74.9627 2.38687C74.9627 1.70141 74.7172 1.13835 74.2263 0.6977C73.7599 0.232567 73.1586 0 72.4222 0C71.6858 0 71.0722 0.232567 70.5813 0.6977C70.1149 1.13835 69.8817 1.70141 69.8817 2.38687C69.8817 3.07233 70.1149 3.64763 70.5813 4.11276Z"
        fill={color}
      />
      <path
        d="M82.5447 25.1539C83.6002 26.0108 85.0238 26.4392 86.8157 26.4392H89.8348V23.1343H87.7361C86.6807 23.1343 85.932 22.9507 85.4902 22.5835C85.0729 22.1918 84.8643 21.4941 84.8643 20.4904V11.4937H90.0189V8.22552H84.8643V3.59866H81.4402L80.9615 8.22552H77.8319V11.4937H80.9615V20.4904C80.9615 22.7181 81.4893 24.2726 82.5447 25.1539Z"
        fill={color}
      />
      <path
        d="M94.0431 4.11276C94.534 4.55341 95.1476 4.77374 95.884 4.77374C96.6204 4.77374 97.2217 4.55341 97.6881 4.11276C98.179 3.64763 98.4245 3.07233 98.4245 2.38687C98.4245 1.70141 98.179 1.13835 97.6881 0.6977C97.2217 0.232567 96.6204 0 95.884 0C95.1476 0 94.534 0.232567 94.0431 0.6977C93.5767 1.13835 93.3435 1.70141 93.3435 2.38687C93.3435 3.07233 93.5767 3.64763 94.0431 4.11276Z"
        fill={color}
      />
      <path
        d="M70.4708 8.22552V26.4392H74.3736V8.22552H70.4708Z"
        fill={color}
      />
      <path
        d="M104.976 8.22552H100.889L107.737 26.4392H112.376L119.188 8.22552H115.138L110.057 22.7303L104.976 8.22552Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.34 26.1087C124.347 26.6228 125.623 26.8798 127.169 26.8798C128.765 26.8798 130.054 26.5371 131.035 25.8516C132.017 25.1662 132.766 24.3216 133.281 23.3179L133.613 26.4392H137V15.2392C137 12.9381 136.3 11.1265 134.901 9.80453C133.502 8.45809 131.526 7.78487 128.974 7.78487C127.55 7.78487 126.237 8.04191 125.034 8.55601C123.856 9.04562 122.874 9.7678 122.088 10.7226C121.328 11.6528 120.886 12.7789 120.763 14.1009H124.666C124.838 13.0727 125.316 12.3016 126.102 11.7875C126.912 11.2489 127.857 10.9796 128.937 10.9796C130.164 10.9796 131.158 11.3346 131.919 12.0445C132.705 12.7545 133.097 13.8194 133.097 15.2392V15.5697H128.311C125.758 15.5697 123.794 16.0838 122.42 17.112C121.045 18.1402 120.358 19.5356 120.358 21.2982C120.358 22.3019 120.603 23.2322 121.094 24.089C121.585 24.9214 122.334 25.5946 123.34 26.1087ZM130.594 22.9874C129.882 23.477 128.998 23.7218 127.943 23.7218C126.863 23.7218 126.004 23.4892 125.365 23.0241C124.752 22.5345 124.445 21.8735 124.445 21.0412C124.445 20.2333 124.764 19.5601 125.402 19.0215C126.065 18.4829 127.169 18.2136 128.716 18.2136H133.06C132.962 19.2174 132.704 20.1354 132.287 20.9677C131.895 21.8001 131.33 22.4733 130.594 22.9874Z"
        fill={color}
      />
      <path
        d="M93.9326 8.22552V26.4392H97.8354V8.22552H93.9326Z"
        fill={color}
      />
      <path
        d="M0 26.4636V23.1955H6.95872V16.6958H10.346V23.1955H17.3047V26.4636H10.346V33H6.95872V26.4636H0Z"
        fill={color}
      />
    </StyledBrand>
  )
}

/***************************/
/******** PROPTYPES ********/
/***************************/
Brand.propTypes = {
  color: PropTypes.string,
}

export default Brand