import React from "react";
import Image from "next/image";
import Link from "next/link";

const BotonesAdmin = ({ image, name, url }) => {
  return (
    <Link href={url}>
      <div className="bg-red-500 p-6 text-center rounded-lg shadow-md hover:bg-red-300 lg:flex lg:flex-col lg:justify-evenly w-[180px]  lg:pb-0 lg:w-[235px] lg:h-[150px] ">
        <Image
          src={image}
          alt={name}
          className="mx-auto mb-2 h-8 w-8 lg:w-20 lg:h-20"
        />
        <div className="text-sm font-medium lg:font-semibold">{name}</div>
      </div>
    </Link>
  );
};

export default BotonesAdmin;
