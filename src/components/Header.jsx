import React from 'react';
import profilePic from '../assets/eu2.jpg'; // Atualize com o caminho correto para a sua foto

const Header = () => {
  return (
    <header className="bg-lightGray text-white h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <img src={profilePic} alt="Leandro Araújo Basílio" className="rounded-full w-60 h-60 mb-4" />
        <h1 className="text-4xl font-bold text-purple">Leandro Araújo Basílio</h1>
      </div>
      <p className="text-xl mt-4">Dev Web | Ciência de Dados | Biologia</p>
    </header>
  );
}

export default Header;
