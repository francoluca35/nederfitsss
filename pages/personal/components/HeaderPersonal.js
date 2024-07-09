import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";

function HeaderPersonal() {
  return (
    <div className="flex justify-between items-center w-full py-8">
       <Link href={"../../objetives"}>
        <button className="flex-initial ml-2">
          <FaArrowLeft size={30} />
        </button>
      </Link>

      <span className="flex-grow text-center text-3xl font-bold">
        Datos Personales
      </span>
      <span className="text-4xl mr-2">
    <FcSportsMode />
  </span>
    </div>
  )
}

export default HeaderPersonal
