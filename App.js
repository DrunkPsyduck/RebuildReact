import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Mario Canales",
    location: "Madrid, ES",
    email: "canalessanchezmario@gmail.com",
    availability: "Abierto a escuchar ofertas",
    brand:
      "Creo soluciones y aplicaciones con las últimas tecnologías en el desarrollo web.\n \nMe gusta desarrollar en la plataforma .NET para aprovechar su capacidad multiplataforma con Xamarin/MAUI. \nReact o Angular son mis opciones favoritas para el desarrollo del FrontEnd.\n Además, he creado aplicaciones, que hacen usos de recursos en Azure o AWS.",
  };

  return (
    <>
     <h1> {personalDetails.name}</h1>
    </>
  );
}

export default App;
