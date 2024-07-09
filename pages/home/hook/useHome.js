import { useState, useEffect } from 'react';
import { db } from '@/firebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';

const useHome = (uid) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar si hay un UID
        if (uid) {
          // Referencia al documento específico del usuario
          const userDocRef = doc(db, 'datos_personales', uid);

          // Obtener el documento
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            // Guardar todos los datos del usuario
            setUserData(docSnap.data());
          } else {
            throw new Error('Documento no encontrado');
          }
        } else {
          throw new Error('UID no encontrado');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uid]);

  return {
    userData,
    loading,
    error,
  };
};

export default useHome;
