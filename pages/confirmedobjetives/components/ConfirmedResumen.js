'use client'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useConfirmed from '../hooks/useConfirmed';
import {calculateIdealWeight} from '../../../src/utils/calculateIdealWeigth'
import speedDescriptions from './speedDescriptions.json'; 
import useObjetiveConfirmed from '../hooks/useObjetiveConfirmed';

function ConfirmedResumen() {

  const router = useRouter();
  const { uid } = router.query;
  const { saveUserData, isDataSaved } = useObjetiveConfirmed();
  const { userData, loading, error } = useConfirmed(uid);
  const [selectedSpeed, setSelectedSpeed] = useState(''); 
  const [currentWeight, setCurrentWeight] = useState('');
  const [currentNombre, setCurrentNombre] = useState('');
  //calculo de peso ideal
  const [currentSex, setCurrentSex] = useState('');
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const [selectedSpeedDescription, setSelectedSpeedDescription] = useState([]);
  //guardar datos
  const [pesoObjetivo, setPesoObjetivo] = useState('');
  const [velocidadAdecuada, setVelocidadAdecuada] = useState('');

  useEffect(() => {
    // Verificar si los datos del usuario están disponibles
    if (userData) {
      // Obtener el peso actual del usuario desde los datos del usuario
      setCurrentWeight(userData.userData?.peso || '');
      setCurrentSex(userData.userData?.sexo || '');
      setCurrentHeight(userData.userData?.altura || '');
      setCurrentNombre(userData?.objetivo || '');
      console.log("peso",userData?.objetivo)
    }
  }, [userData]);


  useEffect(() => {
    setSelectedSpeedDescription(speedDescriptions[selectedSpeed] || []);
  }, [selectedSpeed]);

  const idealWeight = calculateIdealWeight(currentHeight, currentAge, currentSex);

  const handleNext = async () => {
    try {
      // Verificar que los campos requeridos estén completos
      if (!pesoObjetivo || !velocidadAdecuada) {
        throw new Error('Por favor complete todos los campos requeridos.');
      }
  
      // Guardar los datos en Firebase
      await saveUserData(uid, { pesoObjetivo, velocidadAdecuada });
  
      console.log('Datos guardados correctamente');
      
      // Redirigir al usuario a la siguiente página
      router.push(`/finish?uid=${uid}`);
    } catch (err) {
      console.error('Error al guardar los datos:', err.message);
      // Puedes manejar el error aquí mostrando un mensaje al usuario si lo deseas
    }
  };

 const handleSpeedChange = (e) => {
  setSelectedSpeed(e.target.value);
};

const getDescriptionForSpeed = () => {
  return speedDescriptions[selectedSpeed] || [];
};

const handlePesoObjetivoChange = (e) => {
  setPesoObjetivo(e.target.value);
};

const handleVelocidadAdecuadaChange = (e) => {
  setVelocidadAdecuada(e.target.value);
};



  return (
    <div className="p-4">
      <h1 className='text-center font-bold uppercase'>{currentNombre}</h1>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">
          Peso actual (Kg)
        </label>
        <input
           className="w-full p-2 border rounded-md text-black"
           type="number"
           placeholder="Ingrese su peso actual"
           value={currentWeight}
           readOnly={true}
        />
        
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">
          Peso objetivo
        </label>
        <select
          className="w-full p-2 border rounded-md text-black"
          onChange={handlePesoObjetivoChange}
        >
          <option value="">Seleccione un peso objetivo</option>
          {[...Array(91)].map((_, index) => (
            <option key={index} value={60 + index}>{60 + index} Kg</option>
          ))}
        </select>
        <p>(debe ser menor al actual debido a que has seleccionado la opcion perder peso).</p>
        <p>Segun la escala del IMC, el peso ideal deberia ser de:  {idealWeight} Kg</p>

      </div>

      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">
          Velocidad a realizar
        </label>
        <select
          className="w-full p-2 border rounded-md text-black"
          value={velocidadAdecuada}
          onChange={handleVelocidadAdecuadaChange} // Agregado el manejador de eventos
        >
          <option value="">Seleccione uno por favor</option>
          <option value="lento">Lento</option>
          <option value="normal">Normal</option>
          <option value="rapido">Rapido</option>
        </select>
        <ul>
          {selectedSpeedDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      <button
        className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
        onClick={handleNext}
      >
        Siguiente
      </button>
    </div>
  );
}

export default ConfirmedResumen;
