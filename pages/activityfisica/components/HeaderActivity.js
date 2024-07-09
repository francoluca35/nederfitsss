import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";


function HeaderActivity() {
  return (
    <div className="flex justify-between items-center w-full py-8">
    <Link href={"../../personal"}>
     <button className="flex-initial ml-2">
       <FaArrowLeft size={30} />
     </button>
   </Link>

   <span className="flex-grow text-center text-3xl font-bold">
     Nivel de actividad fisica
   </span>
   <span className="text-4xl mr-2">
 <FcSportsMode />
</span>
 </div>
  )
}

export default HeaderActivity
