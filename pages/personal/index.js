import React from 'react'
import HeaderPersonal from './components/HeaderPersonal';
import Progress from './components/Progress';
import FormPersonal from './components/FormPersonal';



function personal() {
  return (
    <>
        <div className="min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
      <HeaderPersonal />
      <Progress />
      <FormPersonal />
      </div>
      </div>
    </>
  )
}

export default personal;
