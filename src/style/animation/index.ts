import { keyframes } from 'styled-components';

export const BounseLeftReturn = keyframes`
  0% {
    transform: translateX(-100%);
  }

  12% {
    transform: translateX(-89.11%);
  }

  24% {
    transform: translateX(-56.44%);
  }

  36% {
    transform: translateX(-1.99%);
  }

  54% {
    transform: translateX(-24.98%);
  }

  74% {
    transform: translateX(-1.63%);
  }

  82% {
    transform: translateX(-6.25%);
  }

  92% {
    transform: translateX(-0.66%);
  }

  96% {
    transform: translateX(-1.54%);
  }

  100% {
    transform: translateX(0%);
  }
`

export const BounceRightReturn = keyframes`
  0% {
    transform: translateX(100%);
  }

  12% {
    transform: translateX(89.11%);
  }

  24% {
    transform: translateX(56.44%);
  }

  36% {
    transform: translateX(1.99%);
  }

  54% {
    transform: translateX(24.98%);
  }

  74% {
    transform: translateX(1.64%);
  }

  82% {
    transform: translateX(6.25%);
  }

  92% {
    transform: translateX(0.66%);
  }

  96% {
    transform: translateX(1.54%);
  }

  100% {
    transform: translateX(0%);
  }
`


export const BounseTopReturn = keyframes`
  0% {
    transform: translateY(-100%);
  }

  12% {
    transform: translateY(-89.11%);
  }

  24% {
    transform: translateY(-56.44%);
  }

  36% {
    transform: translateY(-1.99%);
  }

  54% {
    transform: translateY(-24.98%);
  }

  74% {
    transform: translateY(-1.63%);
  }

  82% {
    transform: translateY(-6.25%);
  }

  92% {
    transform: translateY(-0.66%);
  }

  96% {
    transform: translateY(-1.54%);
  }

  100% {
    transform: translateY( 0%);
  }
`
export const BounseBottomReturn = keyframes`
  0% {
    transform: translateY(100%);
  }

  12% {
    transform: translateY(89.11%);
  }

  24% {
    transform: translateY(56.44%);
  }

  36% {
    transform: translateY(1.99%);
  }

  54% {
    transform: translateY(24.98%);
  }

  74% {
    transform: translateY(1.64%);
  }

  82% {
    transform: translateY(6.25%);
  }

  92% {
    transform: translateY(0.66%);
  }

  96% {
    transform: translateY(1.54%);
  }

  100% {
    transform: translateY(0%);
  }
`

export const RightSlideReturn = keyframes`
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
`

export const Seraching = keyframes`
  0% {
    transform: translate(-20%, 20%);
  }

  25% {
    transform: translate(-20%, -33%);
  }

  50% {
    transform: translate(37%, -18%);
  }

  75% {
    transform: translate(19%, 28%);
  }

  100% {
    transform: translate(0, 0);
  }
`

export const StrokeOffset = keyframes`
  0% {
    stroke-dasharray: 0 250;
    stroke-opacity: 0
  },
  100% {
    stroke-dasharray: 250 250;
    stroke-opacity: 1
  }
`

export const FillOffset = keyframes`
  0%,
  50% {
    fill-opacity: 0
  },
  100% {
    fill-opacity: 1
  }
`
