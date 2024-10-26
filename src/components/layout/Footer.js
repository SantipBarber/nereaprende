import React from 'react';
import { appData } from '../../utils/app-data';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {appData.year} {appData.name}. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              Sobre Nosotros
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contacto
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;