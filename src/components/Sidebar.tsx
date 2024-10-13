import React from 'react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <h2 className="text-xl font-bold mb-4">Categorías</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-600 hover:underline">Política</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Economía</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Deportes</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Tecnología</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Ciencia</a></li>
      </ul>
      
      <h2 className="text-xl font-bold mt-8 mb-4">Noticias Destacadas</h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="block hover:bg-gray-100 p-2 rounded">
            <h3 className="font-semibold">Nuevo récord en la bolsa</h3>
            <p className="text-sm text-gray-600">El índice principal alcanza máximos históricos</p>
          </a>
        </li>
        <li>
          <a href="#" className="block hover:bg-gray-100 p-2 rounded">
            <h3 className="font-semibold">Avances en la vacuna contra el cáncer</h3>
            <p className="text-sm text-gray-600">Investigadores reportan resultados prometedores</p>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;