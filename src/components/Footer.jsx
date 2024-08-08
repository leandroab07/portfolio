import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lightGray text-textGray p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Leandro Araújo Basílio. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
