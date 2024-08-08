import React, { useState } from 'react';

const Certifications = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="certifications" className="bg-darkGray text-textGray p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Certificações</h2>
        <p>Formação em Ciência de Dados pela Alura;</p>
        <div>
          <p
            className="cursor-pointer text-purple hover:underline"
            onClick={() => setShowDetails(!showDetails)}
          >
            <span className="mr-1">🔽</span> {/* Icone para indicar expansão */}

            Formação em Desenvolvimento Web pela Trybe
          </p>
          {showDetails && (
            <div className="ml-4 mt-2">
              <p>Além de Javascript, React e Node.js, aprendi ferramentas como SQL, MySQL, Docker, etc.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
