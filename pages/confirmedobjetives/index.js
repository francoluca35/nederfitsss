import React from 'react'
import ConfirmedHeader from './components/ConfirmedHeader';
import ConfirmedResumen from './components/ConfirmedResumen';
import Progress from './components/Progress';


function confirmedobjetives() {
  return (
    <div className="min-h-screen p-5">
      <div className="max-w-6xl mx-auto">

            <ConfirmedHeader />
            <Progress />
            <ConfirmedResumen />
        </div>
        </div>
  )
}

export default confirmedobjetives;
