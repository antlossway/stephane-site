import Image from "next/image";
import React from "react";

export default function Introduction({ width = 64, height = 64 }) {
  return (
    <div
      className=" px-6 py-4
        flex flex-col sm:flex-row items-center gap-4
        border-b-2 border-slate-300/50"
      // shadow-[0px_10px_20px_theme('colors.slate.300')]
    >
      <Image
        src="/img/avatar1.png"
        alt="avatar"
        width={width}
        height={height}
        priority={true}
        className="rounded-full"
      />
      <div className="text-gray-800 dark:text-white/90 text-center sm:text-left">
        <h1 className="text-lg font-semibold ">Stephane Tougard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-200">
          25 years in the field of IT and Telecom.{" "}
        </p>
      </div>
    </div>
  );
}
