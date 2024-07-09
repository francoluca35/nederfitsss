import React from 'react'

function Progress({ percentage }) {

    const progressWidth = `${98}%`;
  return (
    <div className="w-1/2 mx-auto h-4 bg-gray-300 rounded-md mt-4">
    <div className="h-full bg-red-500 rounded-md" style={{ width: progressWidth }}></div>
  </div>
  )
}

export default Progress
