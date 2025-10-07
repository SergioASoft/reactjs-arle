import { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

function Tasks() {
  const [showTasks, setShowTasks] = useState(true);
  const tasks = useLoaderData();
  const location = useLocation();

  const handleToggleTasks = () => {
    setShowTasks(!showTasks);
  };

  const toggleTaskCompletion = (id) => {
    console.log(`Tarea ${id} marcada como completada`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Mis Tareas</h1>
      <p className="mb-4">URL actual: {location.pathname}</p>
      <button
        onClick={handleToggleTasks}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        {showTasks ? 'Ocultar Tareas' : 'Mostrar Tareas'}
      </button>
      {showTasks && (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center space-x-2 ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              <span>{task.text}</span>
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={`px-2 py-1 rounded ${
                  task.completed
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {task.completed ? 'Desmarcar' : 'Completar'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;