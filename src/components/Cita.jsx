import { Card, CardGroup, Form, Button } from "react-bootstrap";

const Cita = () => {
  return (
    <section className="p-3">
      <div className="row row-cols-2 row-cols-md-3 g-4">
        <div className="col">
          <Card>
            <Card.Title className="m-2 text-start">
              <h4>Mascota:</h4>
              <h5>Dueño:</h5>
            </Card.Title>
            <Card.Body className="fondoFormulario text-start">
              <div className="">
                <div className="d-md-flex align-items-center mb-2 text-center text-md-start">
                  <strong className="me-2">Fecha:</strong>
                  <div className="bg-secondary-subtle py-1 w-100 rounded text-center">
                    10/10/2025
                  </div>
                </div>
                <div className="d-md-flex  align-items-center mb-2 text-center text-md-start">
                  <strong className="me-2">Hora:</strong>
                  <div className="bg-secondary-subtle py-1 w-100 rounded text-center">
                    10:50
                  </div>
                </div>
                <div className="d-md-flex align-items-center mb-2 text-center text-md-start">
                  <strong className="me-2">Sintomas:</strong>
                  <div className="bg-secondary-subtle py-1 w-100 rounded text-center">
                    Fiebre
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="text-end ">
                <Button
                  type="submit"
                  variant="danger"
                  className="px-3 shadow-sm"
                >
                  Borrar
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cita;
