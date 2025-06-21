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
        text: `${dato.nombreMascota}, ${dato.nombreDuenio}, ${dato.fecha.split("-").reverse().join("/")}, ${dato.hora}, ${dato.sintomas}`,
        icon: "success",
        draggable: true,
      });
    }

    setDatosCorrectos([...datosCorrectos, dato]);
    setDato({
      nombreMascota: "",
      nombreDuenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
    setValidated(false);
  };

  const borrarDatos = (nombreDuenio) => {
    const indice = colores.findIndex((item) => item === nombreDuenio);

    if (indice !== -1) {
      const datosNuevos = [...datosCorrectos];

      datosNuevos.splice(indice, 1);
      setColores(datosNuevos);
    }
  };

  return (
    <div>
      <section className="p-3 border rounded-3 fondoFormulario">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="nombreMascota">
              <Form.Label>Nombre de mascota *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese nombre de mascota"
                value={dato.nombreMascota}
                name="nombreMascota"
                onChange={(e) =>
                  setDato({ ...dato, [e.target.name]: e.target.value })
                }
              />
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
                placeholder="Ingrese nombre de dueño"
                value={dato.nombreDuenio}
                name="nombreDuenio"
                onChange={(e) =>
                  setDato({ ...dato, [e.target.name]: e.target.value })
                }
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
              <Form.Control
                type="date"
                placeholder="Ingrese fecha"
                required
                value={dato.fecha}
                name="fecha"
                onChange={(e) =>
                  setDato({ ...dato, [e.target.name]: e.target.value })
                }
              />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="hora">
              <Form.Label>Hora *</Form.Label>
              <Form.Control
                type="time"
                placeholder="Ingrese hora"
                required
                value={dato.hora}
                name="hora"
                onChange={(e) =>
                  setDato({ ...dato, [e.target.name]: e.target.value })
                }
              />
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
                value={dato.sintomas}
                name="sintomas"
                onChange={(e) =>
                  setDato({ ...dato, [e.target.name]: e.target.value })
                }
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
        <ListaCitas datosProps={datosCorrectos}/>
      </section>
    </div>
  );
};

export default Formulario;
