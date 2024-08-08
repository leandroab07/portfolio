import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth < 768) {
      setIsMenuOpen(false); // Fecha o menu em telas pequenas ao clicar em um link
    }
  };

  const handleNameClick = () => {
    setActiveLink('top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-darkGray text-textGray p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div 
          onClick={handleNameClick} 
          className={`text-2xl font-bold cursor-pointer ${activeLink === 'top' ? 'text-purple' : 'hover:text-purple'}`}
        >
          Leandro Basílio
        </div>
        
        {/* Menu Hambúrguer */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden text-3xl px-2 py-1 focus:outline-none"
        >
          ☰
        </button>

        {/* Menu de Navegação */}
        <div 
          className={`lg:flex lg:items-center lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block absolute top-16 left-0 w-full bg-darkGray lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent`}
        >
          <a
            href="#about"
            onClick={() => handleLinkClick('#about')}
            className={`block px-1 py-2 lg:inline-block hover:text-purple ${activeLink === '#about' ? 'text-purple' : ''}`}
          >
            Sobre
          </a>
          <a
            href="#experience"
            onClick={() => handleLinkClick('#experience')}
            className={`block px-1 py-2 lg:inline-block hover:text-purple ${activeLink === '#experience' ? 'text-purple' : ''}`}
          >
            Experiência
          </a>
          <a
            href="#certifications"
            onClick={() => handleLinkClick('#certifications')}
            className={`block px-1 py-2 lg:inline-block hover:text-purple ${activeLink === '#certifications' ? 'text-purple' : ''}`}
          >
            Certificações
          </a>
          <a
            href="#objectives"
            onClick={() => handleLinkClick('#objectives')}
            className={`block px-1 py-2 lg:inline-block hover:text-purple ${activeLink === '#objectives' ? 'text-purple' : ''}`}
          >
            Objetivos
          </a>
          <a
            href="#additional-info"
            onClick={() => handleLinkClick('#additional-info')}
            className={`block px-1 py-2 lg:inline-block hover:text-purple ${activeLink === '#additional-info' ? 'text-purple' : ''}`}
          >
            Informações Adicionais
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
