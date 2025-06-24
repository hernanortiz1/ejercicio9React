import { useState, useEffect } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import ListaCitas from "./ListaCitas";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaCitas")) || [];
  const [datosCorrectos, setDatosCorrectos] = useState(tareasLocalStorage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(datosCorrectos));
  }, [datosCorrectos]);

  const agregarDatos = (datos) => {
    Swal.fire({
      title: "Datos guardados correctamente",
      text: `${datos.nombreMascota}, ${datos.nombreDuenio}, ${datos.fecha
        .split("-")
        .reverse()
        .join("/")}, ${datos.hora}, ${datos.sintomas}`,
      icon: "success",
      draggable: true,
    });

    setDatosCorrectos([...datosCorrectos, datos]);
    reset();
  };

  const borrarDatos = (citaEliminada) => {
    const indice = datosCorrectos.findIndex((item) => item === citaEliminada);

    if (indice !== -1) {
      const datosNuevos = [...datosCorrectos];

      datosNuevos.splice(indice, 1);
      setDatosCorrectos(datosNuevos);
    }
  };

  return (
    <div>
      <section className="p-3 border rounded-3 fondoFormulario">
        <Form onSubmit={handleSubmit(agregarDatos)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="nombreMascota">
              <Form.Label>Nombre de mascota *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese nombre de mascota"
                {...register("nombreMascota", {
                  required: "El nombre es un dato obligatorio",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener 3 caracteres como minimo ",
                  },
                  maxLength: {
                    value: 50,
                    message: "El nombre debe tener 50 caracteres como máximo",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreMascota?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="nombreDuenio">
              <Form.Label>Nombre de dueño *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese nombre de dueño"
                {...register("nombreDuenio", {
                  required: "El nombre es un dato obligatorio",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener 3 caracteres como minimo ",
                  },
                  maxLength: {
                    value: 50,
                    message: "El nombre debe tener 50 caracteres como máximo",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreDuenio?.message}
              </Form.Text>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="fecha">
              <Form.Label>Fecha *</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese fecha"
                required
                {...register("fecha", {
                  required: "La fecha es obligatoria",
                  validate: (value) => {
                    const [year, month, day] = value.split("-").map(Number);
                    const fechaSeleccionada = new Date(year, month - 1, day); // Mes base 0
                    const hoy = new Date();
                    hoy.setHours(0, 0, 0, 0);

                    if (fechaSeleccionada < hoy) {
                      return "La fecha no puede ser anterior a hoy";
                    }

                    return true;
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.fecha?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="hora">
              <Form.Label>Hora *</Form.Label>
              <Form.Control
                type="time"
                placeholder="Ingrese hora"
                required
                {...register("hora", {
                  required: "La hora es obligatoria",
                  validate: (value) => {
                    const fechaInput = watch("fecha"); // usamos la fecha seleccionada
                    const hoy = new Date();
                    const fechaSeleccionada = new Date(fechaInput);
                    const esHoy =
                      fechaSeleccionada.toDateString() === hoy.toDateString();

                    if (esHoy) {
                      const [horas, minutos] = value.split(":");
                      const horaSeleccionada = new Date();
                      horaSeleccionada.setHours(horas, minutos, 0, 0);

                      return (
                        horaSeleccionada >= hoy ||
                        "La hora debe ser igual o posterior a la actual"
                      );
                    }

                    return true; // si no es hoy, cualquier hora es válida
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.hora?.message}
              </Form.Text>
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
                {...register("sintomas", {
                  required: "Los sintomas son un dato obligatorio",
                  minLength: {
                    value: 3,
                    message:
                      "Los sintomas deben tener 3 caracteres como minimo ",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "Los sintomas deben tener 100 caracteres como máximo",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.sintomas?.message}
              </Form.Text>
            </Form.Group>
          </Row>
          <div className="text-center">
            <Button type="submit">Agregar nueva cita</Button>
          </div>
        </Form>
      </section>
      <section className="my-3">
        <ListaCitas
          datosProps={datosCorrectos}
          borrarDatosProps={borrarDatos}
        />
      </section>
    </div>
  );
};

export default Formulario;
