import React from "react";
import data from "../data.json";

export default function Cards() {
  return (
    <div className="container mx-auto p-4">
      <head>
        {/* Título y descripción de la página */}
        <title>Reserva tu cancha favorita por WhatsApp</title>
        <meta
          name="description"
          content="Reserva tu cancha favorita por WhatsApp. Encuentra información sobre diferentes canchas y realiza reservas fácilmente."
        />
      </head>

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-10 text-center">
        Reserva tu cancha <br /> favorita por WhatsApp
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="border bg-white shadow-md rounded-md">
            {/* Enlace con texto alternativo (alt) */}
            <a
              href={item.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 text-2xl font-medium text-gray-700 text-center hover:bg-gray-50 transition-all duration-300 ease-in-out"
            >
              {item.name}
            </a>

            {/* Texto alternativo para imágenes si las tienes / <img src={item.imageSrc} alt={`Imagen de ${item.name}`} />*/}
          </div>
        ))}
      </div>
    </div>
  );
}
