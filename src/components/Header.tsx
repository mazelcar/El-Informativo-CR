import React, { useState } from 'react';
import { Newspaper, Search, User } from 'lucide-react';

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <Newspaper size={24} />
          <h1 className="text-2xl font-bold">El Informativo CR</h1>
        </div>
        <nav className="w-full sm:w-auto mb-2 sm:mb-0">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#" className="hover:text-blue-200">Inicio</a></li>
            <li><a href="#" className="hover:text-blue-200">Política</a></li>
            <li><a href="#" className="hover:text-blue-200">Economía</a></li>
            <li><a href="#" className="hover:text-blue-200">Deportes</a></li>
            <li><a href="#" className="hover:text-blue-200">Tecnología</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-end">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="Buscar noticias..."
              className="px-2 py-1 rounded-l text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-blue-700 px-2 py-1 rounded-r hover:bg-blue-800">
              <Search size={20} />
            </button>
          </form>
          <User size={20} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;