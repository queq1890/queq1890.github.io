import React from 'react'
import { useSpring, animated } from 'react-spring'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

const UserName = ({ open, toggle }) => {
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0125, 0.0' },
    to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    config: { duration: 3000 }
  })

  return (
    <animated.svg style={{ transform, opacity }} viewBox="0 0 1278 446" onClick={() => toggle(!open)}>
      <defs>
        <filter id="water">
          <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1.5" result="TURB" seed="8" />
          <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
        </filter>
      </defs>

      <g
        filter="url(#water)"
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        font-family="Memoir-Square"
        font-size="152"
        font-weight="700">
        <text id="queq1890" fill="lightblue" text-anchor="middle" dominant-baseline="central">
          <tspan x="50%" y="50%">
            queq1890
          </tspan>
        </text>
      </g>
    </animated.svg>
  )
}

export default UserName
