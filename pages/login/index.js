"use client";

import React from 'react';
import { useRouter } from 'next/router';
import useLogin from '@/hooks/useLogin';
import Image from 'next/image';
import textoLabels from '../data/wording.login.texto';
import Link from 'next/link';

const Login = () => {
  const { push, error, setEmail, email, password, setPassword, handleLogin } = useLogin();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  // Validación de campos vacíos
  const isFieldsEmpty = email.trim() === '' || password.trim() === '';

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
            Iniciar Sesión
          </span>

          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 md:w-full lg:mb-2">
              <label
                htmlFor="username"
                className="block text-xs mb-1 lg:text-base 2xl:text-lg"
              >
                {textoLabels.email}
              </label>
              <input
                className="w-full border rounded-lg p-2 outline-none focus:shadow-outline bg-gray-600 bg-opacity-50 focus:bg-gray-700"
                type="email"
                name="username"
                id="username"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
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
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {isFieldsEmpty && <p className="text-red-500 text-center mt-4">Por favor, completa todos los campos.</p>}
            <br /><br />
            <div className="flex justify-center items-center">
              <button
                className="bg-black hover:bg-red-500 hover:text-white text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                type="submit"

              >
                Login
              </button>
            </div>
            
          </form>
          <div className="text-center">
            <p>¿Aun no se ha registrado? <span className="hover:text-red-500 cursor-pointer" ><Link href="/register">Registrarse</Link></span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
