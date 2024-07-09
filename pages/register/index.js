"use client"

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import textoLabels from '../data/wording.register.texto';
import useRegister from '@/hooks/useRegister';


function Register() {
  const { push } = useRouter();
 
  const {
    email,
    password,
    error,
    setEmail,
    setPassword,
    setUsername,
    username,
    handleRegister,
  } = useRegister();

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (error === null && isRegistered) {
      push(`/objetives?uid=${localStorage.getItem('uid')}`);
    }
  }, [error, isRegistered, push]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(e);
    if (error === null && email !== "" && password !== "" && username !== "") {
      setIsRegistered(true);
    }
  };


  return (
    <>
      <div
        className="flex items-center w-screen h-screen bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: "url('/img/Fondo.jpg')" }}
      >
        <div
          style={{ backgroundColor: "rgba(102, 102, 102, 0.76)" }}
          className=" w-full rounded-lg shadow-lg p-8 m-10 max-w-sm md:mx-auto"
        >
          <div>
            <Image
              className="lg:w-52 lg:h-32 lg:mx-auto 2xl:w-56 2xl:h-36 2xl:mt-2"
              src="/img/Logo.png"
              alt="Logo"
              width={500}
              height={300}
              priority
            />
          </div>

          <span className="block w-full text-xl text-center uppercase font-bold mb-4">
            Registrate
          </span>

          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 md:w-full lg:mb-2">
              <label
                htmlFor="email"
                className="block text-xs mb-1 lg:text-base 2xl:text-lg"
              >
                {textoLabels.email}
              </label>
              <input
                className="w-full border rounded-lg p-2 outline-none focus:shadow-outline bg-gray-600 bg-opacity-50 focus:bg-gray-700"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
            onChange={(e) => setEmail(e.target.value)}
                required

              />
            </div>

            <div className="mb-4 md:w-full lg:mb-2">
              <label
                htmlFor="username"
                className="block text-xs mb-1 lg:text-base 2xl:text-lg"
              >
                {textoLabels.usuario}
              </label>
              <input
                className="w-full border rounded-lg p-2 outline-none focus:shadow-outline bg-gray-600 bg-opacity-50 focus:bg-gray-700"
                type="username"
                name="username"
                id="username"
                placeholder="Usuario"
                autoComplete="username"
                value={username}
            onChange={(e) => setUsername(e.target.value)}
                required

              />
            </div>
            <div className="mb-6 md:w-full lg:mb-0 2xl:mb-5">
              <label
                htmlFor="password"
                className="block text-xs mb-1 lg:text-base 2xl:text-lg"
              >
                {textoLabels.password}
              </label>
              <input
                className="w-full border rounded-lg p-2 outline-none focus:shadow-outline bg-gray-600 bg-opacity-50 focus:bg-gray-700"
                type="password"
                required
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"

              />
            </div>

      
          <br />
            <div className="flex justify-center items-center">
            
               <button
                className="bg-black hover:bg-red-500 hover:text-white text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                type="submit"
              >
                Registrate
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>

          <div className="text-center">
            <p>¿Tenes Cuenta? <span className="hover:text-red-500 cursor-pointer"><Link href="/login">Inicia sesión</Link></span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
