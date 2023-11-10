import "./App.css";
import Cards from "./Componentes/Cards";
import logo from "./assets/padelmdq.png";
import Footer from "./Componentes/Footer";
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img
        src={logo}
        alt="Padel MDQ"
        className="w-2/3 md:w-1/2 lg:w-1/3 m-16"
      />

      <Cards />
      <Footer />
    </div>
  );
}

export default App;
