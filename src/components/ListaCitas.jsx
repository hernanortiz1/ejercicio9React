import Cita from "./Cita";

const ListaCitas = () => {
  return (
    <div>
      <div className="text-center bg-white rounded-3">
        <h2>Lista de citas</h2>
        <div className="border border-1 border-dark-subtle rounded-3">
          <Cita />
        </div>
      </div>
    </div>
  );
};

export default ListaCitas;
