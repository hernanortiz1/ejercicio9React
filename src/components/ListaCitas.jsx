import Cita from "./Cita";

const ListaCitas = ({ datosProps, borrarDatosProps }) => {
  return (
    <div>
      <div className="text-center bg-white rounded-3">
        <h2>Lista de citas</h2>
        <div className="row row-cols-2 row-cols-md-3">
          {datosProps.map((item, indice) => (
            <Cita
              key={indice}
              datosProps={item}
              borrarDatosProps={borrarDatosProps}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaCitas;
