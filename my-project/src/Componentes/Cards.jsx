import React from "react";
import data from "../data.json";

export default function Cards() {
  return (
    <div className="flex flex-col items-center w-full m-3">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl m-2 mb-10 text-center">
        Reserva tu cancha <br /> favorita por 
      </h1>

      <div className="flex flex-col space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border bg-white shadow-md rounded-md w-96"
          >
            <a
              href={item.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 m-2 text-2xl font-medium text-gray-700 hover:bg-gray-50 text-center"
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
