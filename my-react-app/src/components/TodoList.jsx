import './TodoList.css';
import parse from 'html-react-parser'; 
function TodoList() {
  const tareas = ["Hacer caraotas","Hablar por teléfono"];
  const usuario = "Mafe";
  const htmlCrudo="<p>Este es un <strong>texto en negrita </strong>renderizado con html-react-parser.</p>";
  const renderConMap = tareas.map((tarea, index) => (
    <li key={index} className="tarea">{tarea}</li>
  ));
  const renderConForEach = [];
  tareas.forEach((tarea, index) => {
    renderConForEach.push(
      <li key={index} className="tarea">{tarea}</li>
    );
  });
  const renderConFor = [];
  for (let i = 0; i < tareas.length; i++) {
    renderConFor.push(
      <li key={i} className="tarea">{tareas[i]}</li>
    );
  }
   const renderMensaje = () => {
    switch (tareas.length) {
      case 0:
        return <p>No hay tareas pendientes.</p>;
      case 1:
        return <p>Tienes 1 tarea pendiente.</p>;
      case 2:
        return <p>Tienes 2 tareas pendientes.</p>;
      default:
        return <p>Tienes muchas tareas pendientes.</p>;
    }
  };
  return (
    <>
      <h2 className='titulo'>Lista de Tareas de {usuario}</h2>
      <div>{parse(htmlCrudo)}</div>
      {renderMensaje()}
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} className="tarea">{tarea}</li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;