import React from 'react';
import { useRouter } from 'next/router';
import useHome from './hook/useHome';
import Horario from './components/Horario';
import Balanza from './components/Balanza';
import BotonesAdmin from '@/components/BotonesAdmin';
import ButtonsHome from '../data/wordingHome.texto';

function Home() {
  const router = useRouter();
  const { uid } = router.query;
  const { userData, loading, error } = useHome(uid);

  return (
    <>
    <Horario />
    <div  className="flex flex-col items-center">
    <div className="mt-8 mb-8">
        <Balanza />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4  ">
      {ButtonsHome.map((button) => (
        <BotonesAdmin
          key={button.id}
          image={button.image}
          name={button.name}
          url={button.url}
          // Clase adicional para aumentar el tamaño en dispositivos móviles
          className="bg-red"
        />
      ))}
    </div>
    </div>
    </>
  );
}

export default Home;
