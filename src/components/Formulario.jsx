import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import ListaCitas from "./ListaCitas";
import Swal from "sweetalert2";

const Formulario = () => {
 
  const [dato, setDato] = useState({
      nombreMascota: "",
      nombreDuenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
    const [datosCorrectos, setDatosCorrectos] = useState([]);
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const form = e.currentTarget;
  
      if (form.checkValidity() === false) {
        e.stopPropagation();
       
        Swal.fire({
          icon: "error",
          title: "Datos incorrectos!",
          text: "Volvé a ingresar los datos",
        });
      } else {
        Swal.fire({
          title: "Datos guardados correctamente",
          text: `${dato.nombreMascota}, ${dato.nombreDuenio}, ${dato.fecha}, ${dato.hora}, ${dato.sintomas}`,
          icon: "success",
          draggable: true,
        });
      }
  
      setDatosCorrectos([...datosCorrectos, dato]);
      setDato({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
      });
      setValidated(false);
    };

  return (
    <div>
      <section className="p-3 border rounded-3 fondoFormulario">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="nombreMascota">
              <Form.Label>Nombre de mascota *</Form.Label>
              <Form.Control required type="text" placeholder="Ingrese nombre" />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="nombreDuenio">
              <Form.Label>Nombre de dueño *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese apellido"
              />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="fecha">
              <Form.Label>Fecha *</Form.Label>
              <Form.Control type="date" placeholder="Ingrese fecha" required />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="hora">
              <Form.Label>Hora *</Form.Label>
              <Form.Control type="time" placeholder="Ingrese hora" required />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="sintomas">
              <Form.Label>Sintomas *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese sintomas"
                required
              />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="text-center">
            <Button type="submit">Agregar nueva cita</Button>
          </div>
        </Form>
      </section>
      <section className="my-3">
        <ListaCitas />
      </section>
    </div>
  );
};

export default Formulario;
