import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  

  return (
    <>
      <main className="bg-secondary-subtle">
        <h1 className="my-3 text-center fw-bold">Administrador de pacientes de veterinaria</h1>
        <div className="container">
          <Formulario/>
        </div>
      </main>
      <footer className="bg-dark text-light text-center py-3">&copy; Todos los derechos reservados</footer>
    </>
  )
}

export default App
