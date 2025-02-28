import React from 'react'

function LoadingComponent() {
  return (
    <div className="flex space-x-1 justify-center items-center">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
    </div>
  )
}

export default LoadingComponent