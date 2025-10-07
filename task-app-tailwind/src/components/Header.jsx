import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          Task App
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-bold' : 'hover:text-gray-300'
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-bold' : 'hover:text-gray-300'
              }
            >
              Tareas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-task"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-bold' : 'hover:text-gray-300'
              }
            >
              Agregar Tarea
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;