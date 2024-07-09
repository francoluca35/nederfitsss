'use client'
import React, { useState } from 'react';
import Progress from './Progress';
import { useRouter } from 'next/router';
import useUserDataGym from '@/hooks/userUserDataGym';

function ActivityGym() {
  const [selectedButton, setSelectedButton] = useState(null);
  const router = useRouter();
  const { uid } = router.query;
  
  const { saveUserData, error, isDataSaved } = useUserDataGym();

  const handleButtonClick = async (buttonName) => {
    setSelectedButton(buttonName);

     try {
      // Guardar la opción seleccionada en la base de datos
      await saveUserData(uid, buttonName);

      // Navegar a la siguiente página con el UID como parámetro
      router.push(`/confirmedobjetives?uid=${uid}`);
    } catch (err) {
      console.error('Error al guardar los datos:', err);
    }
  };


  return (
    <>
      <Progress />
      <div className="h-screen flex justify-center">
        <div className="flex flex-col m-4 items-center w-full">
          <button
            className={`w-full p-4 mb-4 rounded-lg ${selectedButton === 'button1' ? 'bg-red-500 text-white' : 'bg-slate-800 text-white'}`}
            onClick={() => handleButtonClick('Sedentario')}
          >
            Sedentario
            <p>Nada o poco de ejercicio</p>
          </button>

          <button
            className={`w-full p-4 mb-4 rounded-lg ${selectedButton === 'button2' ? 'bg-red-500 text-white' : 'bg-slate-800 text-white'}`}
            onClick={() => handleButtonClick('Ligero')}
          >
            Ligero
            <p>Ejercicio 2-3 días por semana</p>
          </button>

          <button
            className={`w-full p-4 mb-4 rounded-lg ${selectedButton === 'button3' ? 'bg-red-500 text-white' : 'bg-slate-800 text-white'}`}
            onClick={() => handleButtonClick(' Moderado')}
          >
            Moderado
            <p>Ejercicio 4-6 días por semana</p>
          </button>

          <button
            className={`w-full p-4 mb-4 rounded-lg ${selectedButton === 'button4' ? 'bg-red-500 text-white' : 'bg-slate-800 text-white'}`}
            onClick={() => handleButtonClick('Alto Rendimiento')}
          >
            Alto Rendimiento
            <p>Ejercicio 6-7 días por semana</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default ActivityGym;
