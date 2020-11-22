import * as React from 'react'

function SvgClosed(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 19" fill="none" {...props}>
      <path
        d="M17 1L1 18M1 1l16 17"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SvgClosed
