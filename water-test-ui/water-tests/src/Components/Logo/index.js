import React from "react"

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      viewBox="-60.071 13.989 620.142 122.021"
      style={{ background: "#596886" }}
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <filter id="editing-hover" width="300%" height="300%" x="-100%" y="-100%">
          <feFlood floodColor="#052b4a" result="flood"></feFlood>
          <feComposite in="flood" in2="SourceAlpha" operator="in" result="shadow"></feComposite>
          <feOffset dx="-4" dy="-4" in="SourceGraphic" result="offset-1"></feOffset>
          <feOffset dx="4" dy="4" in="shadow" result="offset-2"></feOffset>
          <feMerge>
            <feMergeNode in="offset-2"></feMergeNode>
            <feMergeNode in="offset-1"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#editing-hover)">
        <path
          fill="#ffd5af"
          d="M27.01-20.61l12.93-1.15Q35.33-11.65 35.33.06q-1.73 1.22-4.26 1.22T26.94.1q-1.6-1.19-1.92-2.4-1.6 1.66-4.19 2.62-2.59.96-5.34.96t-5.15-.9Q7.94-.51 6.08-2.5q-4.1-4.35-4.1-12.6 0-12.8 6.85-20.48 7.04-7.94 19.52-7.94 8.64 0 11.71 4.48.96 1.41.96 3.1 0 1.7-.73 3.14-.74 1.44-1.89 2.59-2.75 2.56-6.14 2.56-1.35 0-2.63-.45.26-1.92.26-4.16t-.16-3.26q-.16-1.02-.55-1.86-.83-1.72-2.65-1.72-1.83 0-3.84 1.95-2.02 1.95-3.62 5.15-3.52 7.17-3.52 15.81 0 3.97 1.54 6.78 1.66 3.07 4.61 3.07 1.02 0 1.95-.51.93-.51 1.31-.89l2.05-12.87zM66.94-4.8q0-4.48 1.8-13.44h-9.48L55.74 0H42.37l8.13-42.24H64l-3.71 18.88h9.47l3.52-18.88h13.5q-.89 4.74-2.04 10.05l-2.18 10.43Q80.13-9.6 80.13-4.29q0 2.18.7 3.39-3.2 2.18-6.94 2.18-3.75 0-5.35-1.79-1.6-1.79-1.6-4.29zm59.59-37.89q15.68 0 15.68 11.07 0 6.08-3.91 9.73-3.84 3.65-10.56 3.65-3.13 0-5.56-1.79-1.16-.77-1.92-1.79 4.67 0 7.13-2.85 2.47-2.85 2.47-8.42t-5.51-5.57h-1.53q-.39 0-.71.07L114.75 0h-13.89l7.88-41.92q6.84-.64 10.81-.7 3.97-.07 6.98-.07zm36.03 24.71q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02L154.24 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.72 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.6 2.49-7.01 2.49-1.92 0-2.69-.76zm27.26 19.26q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.6 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.37 6.69-.77 4.09-.77 9.15 0 1.66.54 2.75.55 1.09 2.02 1.09t2.4-.7q.93-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm53.63-.06q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.7-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.21 1.44 3.9 1.44 3.71 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zm27.65 15.8q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11t-7.01-.96q-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63zm40.32-4.67q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.92 1.44-1.31 1.44-1.31 3.24 0 1.28 1.03 2.3 1.47 1.41 5.24 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.68-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7zm31.11 0q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7zm27.32 18.94q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.83 1.35 1.83 3.84 0 2.5-2.02 3.78-2.02 1.28-5.02 1.28-3.01 0-4.9-1.28-1.89-1.28-1.89-3.78zm41.99 42.82q-7.75 0-7.75-6.02.07-1.66.58-4.48l1.15-5.88q1.73-8.32 1.73-10.18 0-3.71-2.18-3.71-3.65 0-5.57 9.53L375.17 0 362.3 1.28l6.66-33.98 10.5-1.22-1.03 6.27q3.01-6.27 12.23-6.27 4.48 0 6.36 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25-.96 4.16-.96 5.73 0 1.56.87 2.46.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.2 1.28-5.08 1.28zm17.6-28.03q2.17-3.07 5.47-5.12 3.29-2.05 7.33-2.05 4.03 0 5.95 1.28l12.54-1.28-4.35 24.58q-2.24 12.54-6.98 17.47-4.54 4.67-13.37 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.98-4.13 1.99-1.51 5.06-1.51 2.69 0 4.73 1.22 1.22.64 1.8 1.54-1.48 1.28-1.48 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.71-2.75 1.28-5.51-2.88 3.52-9.4 3.52-4.55 0-7.17-2.17-2.63-2.18-2.63-7.3 0-3.2 1.09-6.81 1.09-3.62 3.27-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.53 0 3-1.67 1.16-1.34 1.6-3.33l3.27-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.91 0-6.21 6.4-1.79 4.99-1.79 11.13z"
          transform="translate(29.075 104.752)"
        ></path>
      </g>
    </svg>
  )
}

export default Logo