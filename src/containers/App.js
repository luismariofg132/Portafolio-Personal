import Contacto from "../components/Contacto";
import Navbar from "../components/Navbar";
import Peril from "../components/Peril";
import Proyectos from "../components/Proyectos";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Peril />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
