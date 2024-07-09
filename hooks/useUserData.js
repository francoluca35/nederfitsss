import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

const useUserData = (uid, selectedObjective) => {
  const [error, setError] = useState(null);
  const [isDataSaved, setIsDataSaved] = useState(false);

  useEffect(() => {
    const saveUserData = async () => {
      try {
        // Referencia al documento específico del usuario
        const userDocRef = doc(db, 'datos_personales', uid);

        // Actualizar el documento con el campo objetivo
        await setDoc(userDocRef, {
          objetivo: selectedObjective
        }, { merge: true }); // Usa merge para actualizar el documento sin sobrescribirlo

        setIsDataSaved(true);
      } catch (err) {
        setError(err.message);
      }
    };

    // Verificar si hay un UID y una opción seleccionada para guardar los datos
    if (uid && selectedObjective) {
      saveUserData();
    }
  }, [uid, selectedObjective]);

  return {
    error,
    isDataSaved
  };
};

export default useUserData;
