'use client'
import { useState, useEffect } from 'react';
import { db } from '@/firebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';

const useConfirmed = (uid) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Verificar si hay un UID
        if (uid) {
          // Referencia al documento específico del usuario
          const userDocRef = doc(db, 'datos_personales', uid);

          // Obtener el documento
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            // Guardar los datos del documento en el estado
            setUserData(docSnap.data());
          } else {
            throw new Error('Documento no encontrado');
          }

          setLoading(false);
        } else {
          throw new Error('UID no encontrado');
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchUserData();
  }, [uid]);

  return { userData, loading, error };
};

export default useConfirmed;
