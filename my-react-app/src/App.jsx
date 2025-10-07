import TodoList from "./components/TodoList";

function App() {
  const nombre = "Sergio";
  return (
    <div>
      <h1>¡Hola, {nombre}!</h1>
      <p>Este es un ejemplo de JSX.</p>
      <TodoList />
    </div>
  );
}
export default App;