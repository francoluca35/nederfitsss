import { useState } from 'react';
import { auth } from '@/firebase/firebase.config';
import { useRouter } from 'next/router';

const useSignOut = () => {
  const [error, setError] = useState(null);
  const { push } = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      push('/login'); // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      setError(error.message); // Muestra el mensaje de error proporcionado por Firebase
    }
  };

  return {
    error,
    handleSignOut,
  };
};

export default useSignOut;
