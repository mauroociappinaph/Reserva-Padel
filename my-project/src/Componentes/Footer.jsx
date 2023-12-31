export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl m-2 mb-10 text-center">
            ¿Queres agregar tu cancha?
          </h2>
          <a
            href="https://wa.me/5492235916616"
            className="mt-8 inline-block rounded-full border px-12 py-3 text-base font-medium text-white bg-black  focus:outline-none focus:ring active:bg-white active:text-black"
          >
            ESCRIBINOS
          </a>
          <p className="mt-8 text-gray-500 text-sm font-bold">
            &copy; {currentYear} Todos los derechos reservados <br className="hidden sm:inline " />padelmdq.com.ar. 
          </p>
        </div>
      </div>
    </footer>
  );
}
