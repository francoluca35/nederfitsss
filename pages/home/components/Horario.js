'use client'
import React, { useState, useEffect } from 'react';
import useHome from '../hook/useHome';
import { useRouter } from 'next/router';
import styles from '../style/Horario.module.css'; // Importa el archivo de estilos
import { FiLogOut } from 'react-icons/fi'; // Importa el ícono de logout
import useSignOut from '@/hooks/useSignOut';


const Horario = () => {
    const router = useRouter();
    const { uid } = router.query;

    const { userData, loading, error } = useHome(uid);

    const [currentDate, setCurrentDate] = useState(new Date());

    const { handleSignOut } = useSignOut();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('es-ES');
    };


    return (
        <div className={`flex justify-between items-center p-4 ${styles.container}`}>
        <div className="flex items-center">
            <button onClick={handleSignOut} className="mr-2">
                <FiLogOut size={20} />
            </button>
            <div className={`text-xl font-bold ${styles.name}`}>
                Hola,   {userData?.userData?.nombreCompleto.split(' ')[0]} {/* Mostrar solo el primer nombre */}
            </div>
        </div>
        <div className={`text-lg ${styles.date}`}>
            <span>{formatDate(currentDate)}</span> {/* Mostrar solo la fecha */}
        </div>
    </div>
    );
};

export default Horario;
