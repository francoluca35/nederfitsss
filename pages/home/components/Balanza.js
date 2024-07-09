import React from 'react';
import AnimatedBarChart from './progress/AnimatedBarChart';
import ProgressCalories from './progress/ProgressCalories';
import ProgressSlepp from './progress/ProgressSlepp';

const Balanza = () => {
  const progress = 75;
  const percentageCalories = 55;

  return  (
    <div className="bg-gray-700 rounded-2xl flex flex-col h-4/6 justify-start w-screen">
      {/* Sección para dispositivos móviles */}
      <div className="md:hidden">
        {/* Contenedor para ProgressCalories y AnimatedBarChart */}
        <div className="flex justify-between">
          <div className="p-6">
            <ProgressCalories
              className='w-20'
              percentage={progress}
              percentageCalories={percentageCalories}
            />
          </div>
          <div className="p-6">
            <AnimatedBarChart
              className='w-20'
              percentage={progress}
              percentageCalories={percentageCalories}
            />
          </div>
        </div>
        {/* ProgressSlepp debajo */}
        <div className='p-4 -mt-20'>
          <ProgressSlepp />
        </div>
      </div>
      {/* Sección para dispositivos de escritorio */}
      <div className="hidden md:flex justify-start">
        <div className="p-6">
          <AnimatedBarChart
            className='w-20'
            percentage={progress}
            percentageCalories={percentageCalories}
          />
        </div>
        <div className="p-6">
          <ProgressCalories
            className='w-20'
            percentage={progress}
            percentageCalories={percentageCalories}
          />
        </div>
        <div className='p-4 -mt-8'>
          <ProgressSlepp />
        </div>
      </div>
    </div>
  );
};

export default Balanza;
