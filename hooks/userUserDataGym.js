import { useState } from 'react';
import { db } from '../firebase/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

const useUserDataGym = () => {
  const [error, setError] = useState(null);
  const [isDataSaved, setIsDataSaved] = useState(false);

  const saveUserData = async (uid, buttonName) => {
    try {
      // Verificar si hay un UID
      if (uid) {
        // Referencia al documento específico del usuario
        const userDocRef = doc(db, 'datos_personales', uid);

        // Actualizar el documento con el campo userData
        await setDoc(userDocRef, {
          actividad: buttonName,
        }, { merge: true }); // Usa merge para actualizar el documento sin sobrescribirlo

        setIsDataSaved(true);
      } else {
        throw new Error('UID no encontrado');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    saveUserData,
    error,
    isDataSaved
  };
};

export default useUserDataGym;


