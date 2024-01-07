import React from 'react'

function Button({ color, bgColor, size, text, borderRadius }) {
  return (
    <button
      type="button"
      style={{ color, backgroundColor: bgColor, borderRadius }}
      className={`text-${size} py-3 px-4 hover:drop-shadow-xl`}
    >
        {text}
    </button>
  );
}

export default Button