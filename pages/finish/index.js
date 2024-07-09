import React from 'react'
import HeaderFinish from './components/HeaderFinish'
import FinishResumen from './components/FinishResumen'
import Progress from './components/Progress'


function finish() {
  return (
    <div className="min-h-screen p-5">
      <div className="max-w-6xl mx-auto">

            <HeaderFinish />
            <Progress />
            <FinishResumen />
        </div>
        </div>
  )
}

export default finish
