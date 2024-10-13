import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">El Informativo CR</h3>
            <p className="text-sm">Tu fuente confiable de noticias e información actualizada en Costa Rica.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Secciones</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">Política</a></li>
              <li><a href="#" className="hover:text-blue-300">Economía</a></li>
              <li><a href="#" className="hover:text-blue-300">Deportes</a></li>
              <li><a href="#" className="hover:text-blue-300">Tecnología</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-300">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-300">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-300">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Contacto</h4>
            <p className="text-sm">Email: info@elinformativocr.com</p>
            <p className="text-sm">Teléfono: +506 2222 3333</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 El Informativo CR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;