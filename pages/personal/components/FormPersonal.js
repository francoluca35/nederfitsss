"use client"
import React, { useState } from 'react';
import {Tabs, Tab} from "@nextui-org/react";
import { useRouter } from 'next/router';
import useUserDataPersonal from '../../../hooks/useUserDataPersonal'; 

function FormPersonal() {
  const [gender, setGender] = useState('Hombre');
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const router = useRouter();
  const { uid } = router.query;

  const { saveUserData, error, isDataSaved } = useUserDataPersonal();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSaveAndNext = async () => {
    const userData = {
      sexo: gender,
      nombreCompleto: fullName,
      fechaNacimiento: birthdate,
      altura: height,
      peso: weight
    };

    // Llama al método saveUserData del hook con el UID y los datos del usuario
    await saveUserData(uid, userData);

    // Navega a la siguiente página
    router.push(`/activityfisica?uid=${uid}`);
  };

  return (
    <div className="p-4">
      {/* Tabs de género */}
      <div className="flex mb-4">
      <button
      className={`flex-1 p-2 text-center transition-colors duration-500 rounded-l-lg  ${
        gender === 'Hombre' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-600'
      }`}
      onClick={() => setGender('Hombre')}
    >
      Hombre
    </button>
    <button
      className={`flex-1 p-2 text-center transition-colors duration-500 rounded-r-lg ${
        gender === 'Mujer' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-600 '
      }`}
      onClick={() => setGender('Mujer')}
    >
      Mujer
    </button>
      </div>

      {/* Formulario */}
      <form className="space-y-4">
        <div>
          <label htmlFor="fullName">Nombre Completo:</label>
          <input
            type="text"
            id="fullName"
            placeholder='Nombre Completo'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
          />
        </div>
        <div>
          <label htmlFor="birthdate">Fecha de nacimiento:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
          />
        </div>
        <div className="flex">
          <div className="w-1/2 mr-2">
            <label htmlFor="height">Altura:</label>
            <div className="flex space-x-2 ">
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-1/2 p-2 border rounded-md text-black"
              />
              <select
                onChange={(e) => console.log(e.target.value)}
                className="w-1/2 p-2 border rounded-md text-black"
              >
                <option value="cm">cm</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="weight">Peso:</label>
            <div className="flex space-x-2">
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-1/2 p-2 border rounded-md text-black"
              />
              <select
                onChange={(e) => console.log(e.target.value)}
                className="w-1/2 p-2 border rounded-md text-black"
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSaveAndNext}
          className="w-full bg-red-500 text-white p-2 rounded-md"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default FormPersonal;
