import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";

function HeaderObjetive() {
  return (
    <div className="flex justify-between items-center w-full py-8">
       <Link href={"/"}>
        <button className="flex-initial">
          <FaArrowLeft size={30} />
        </button>
      </Link>

      <span className="flex-grow text-center text-3xl font-bold">
        Categoria
      </span>
      <span className="text-4xl mr-2">
 <FcSportsMode />
</span>
    </div>
  )
}

export default HeaderObjetive
