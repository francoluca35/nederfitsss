"use client";
import React, { useState } from "react";
import { Button, Progress } from "@nextui-org/react";
import HeaderObjetive from "./components/HeaderObjetive";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import useUserData from "@/hooks/useUserData";
import { auth } from "@/firebase/firebase.config";
import ProgressOb from "./components/Progress";

function Objetives() {
  const [progress, setProgress] = useState(0);
  const [selectedObjective, setSelectedObjective] = useState(null);
  const router = useRouter();
  const { uid } = router.query;
  const { error, isDataSaved } = useUserData(uid, selectedObjective);
  

  const handleNext = () => {
     {
      console.log('siguiente');
      router.push(`/personal?uid=${uid}`); // Usar el UID del usuario registrado
    }
  };
  

  const handleSelectObjective = (objective) => {
    console.log(`Selected objective: ${objective}`);
    setSelectedObjective(objective);
  };
  let icon = "/img/selection/perderpeso2.png";
  let ico = "/img/selection/mantenerpeso.png";
  let icono = "/img/selection/gamarmasa.png";

  return (
    <>
        <div className="min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
      <HeaderObjetive /> 
      <ProgressOb />
      <div className="p-8">
       

        <div className="grid grid-cols-1 gap-4">
          <Button
            onClick={() => handleSelectObjective("Perder peso")}
            className={`p-6 block w-full uppercase font-bold flex items-center justify-center hover:bg-red-400 ${
              selectedObjective === "Perder peso" ? "bg-red-300 text-black" : "bg-gray-700"
            }`}
          >
            Perder peso
            <Image src={icon} alt="Perder peso" width={50} height={50} className="ml-2 items-center"/>
          </Button>
          <Button
            onClick={() => handleSelectObjective("Ganar masa muscular")}
            className={`p-6 block w-full uppercase font-bold flex items-center hover:bg-red-400 justify-center ${
              selectedObjective === "Ganar masa muscular" ? "bg-red-300 text-black" : "bg-gray-700"
            }`}
          >
            Ganar masa muscular
            <Image
              src={ico}
              alt="Ganar masa muscular"
              width={50}
              height={50}
              className="ml-2 mb:ml-2"
            />
          </Button>
          <Button
            onClick={() => handleSelectObjective("Mantener peso")}
            className={`p-6 block w-full uppercase font-bold flex items-center hover:bg-red-400 justify-center ${
              selectedObjective === "Mantener peso" ? "bg-red-300 text-black" : "bg-gray-700"
            }`}
          >
            Mantener peso
            <Image
              src={icono}
              alt="Mantener peso"
              width={50}
              height={50}
              className="ml-2 mb:ml-2 "
            />
          </Button>
        </div>

        <div className="mt-8">
          <Button
             className="p-6 block text-white font-bold w-full bg-red-500 flex items-center justify-center"
             onClick={handleNext}
          >
            Siguiente
          </Button>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Objetives;
