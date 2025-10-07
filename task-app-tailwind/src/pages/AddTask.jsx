import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useDependentSelects from '../hooks/useDependentSelects';

function AddTask() {
  const [taskText, setTaskText] = useState('');
  const { category, setCategory, subcategories, subcategory, setSubcategory } = useDependentSelects();
  const navigate = useNavigate();
  const taskInputRef = useRef(null);
  const submitCountRef = useRef(0); // Para contar cuántas veces se ha enviado el formulario

  // Enfocar el input al montar el componente
  useEffect(() => {
    taskInputRef.current.focus();
  }, []);

  // Incrementar el contador de envíos cada vez que se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      submitCountRef.current += 1; // Incrementar el contador sin causar re-render
      console.log('Tarea agregada:', { taskText, category, subcategory });
      console.log('Número de envíos:', submitCountRef.current);
      setTaskText('');
      setCategory('');
      setSubcategory('');
      navigate('/tasks');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Agregar Nueva Tarea</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="task" className="block text-lg font-medium">
            Nueva Tarea
          </label>
          <input
            type="text"
            id="task"
            ref={taskInputRef} // Asignar la referencia al input
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe una tarea"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-lg font-medium">
            Categoría
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona una categoría</option>
            <option value="work">Trabajo</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        {category && (
          <div>
            <label htmlFor="subcategory" className="block text-lg font-medium">
              Subcategoría
            </label>
            <select
              id="subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecciona una subcategoría</option>
              {subcategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Agregar
        </button>
      </form>
      <p className="mt-4">Número de tareas enviadas: {submitCountRef.current}</p>
    </div>
  );
}

export default AddTask;