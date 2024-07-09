'use client'
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useFinish from "../hooks/useFinish";
import calculateCalories from "@/src/utils/calculateCalories";


function FinishResumen() {
  const router = useRouter();
  const { uid } = router.query;
  const { userData, loading, error } = useFinish(uid);


  const handleNext = () => {
    {
     console.log('siguiente');
     router.push(`/home?uid=${uid}`); // Usar el UID del usuario registrado
   }
 };
 

  return (
    <div className="p-4">
      <div className="bg-slate-700 rounded-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">Peso objetivo</h1>
        <p className="text-white mb-4 text-center">
          {userData?.userDataConfirmed?.pesoObjetivo || 'No disponible'} Kg
        </p>
      </div>
      <div className="bg-slate-700 rounded-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">
           Objetivo
        </h1>
        <p className="text-white mb-4 text-center">
        {userData?.objetivo || 'No disponible'}
        </p>
      </div >
      <div className="bg-slate-700 rounded-xl">
        <h1 className="text-2xl font-bold mb-2 text-center ">
          Actividad Fisica
        </h1>
        <p className="text-white mb-4 text-center">
        {userData?.actividad || 'No disponible'}
        </p>
      </div>
      <div className="bg-slate-700 rounded-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">Velocidad Seleccionada</h1>
        <p className="text-white mb-4 text-center">
        {userData?.userDataConfirmed.velocidadAdecuada || 'No disponible'}
        </p>
      </div>
      <button className="w-full bg-red-500 hover:bg-red-400 text-white p-2 rounded-md mt-4"        
       onClick={handleNext}>
        Crear Plan
      </button>
    </div>
  );
}

export default FinishResumen;
