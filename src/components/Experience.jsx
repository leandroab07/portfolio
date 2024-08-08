import React, { useState } from 'react';

const Experience = () => {
  const [showLBAA, setShowLBAA] = useState(false);
  const [showNGHM, setShowNGHM] = useState(false);

  return (
    <section id="experience" className="bg-lightGray text-textGray p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Experiência Profissional</h2>
        <p>Acadêmico de Ciências Biológicas – Universidade Federal do Espírito Santo (Ufes);</p>

        <div>
          <p
            className="cursor-pointer text-purple hover:underline"
            onClick={() => setShowLBAA(!showLBAA)}
          >
            <span className="mr-1">🔽</span> {/* Icone para indicar expansão */}
          Bolsista de Iniciação Científica no Laboratório de Biotecnologia Aplicada ao Agronegócio (LBAA) - Ufes
          </p>
          {showLBAA && (
            <div className="ml-4 mt-2">
              <ul className="list-disc list-inside">
                <li>Trabalhei com dados metagenômicos de bactéria preparando os dados e identificando bactérias por meio deles;</li>
                <li>Utilizei Linux, linguagem R e bibliotecas como DADA2 para essas análises.</li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <p
            className="cursor-pointer text-purple hover:underline flex items-center"
            onClick={() => setShowNGHM(!showNGHM)}
          >
            <span className="mr-2">🔽</span> {/* Icone para indicar expansão */}
            Bolsista no laboratório Núcleo de Genética Humana e Molecular (NGHM) - Ufes
          </p>
          {showNGHM && (
            <div className="ml-4 mt-2">
              <ul className="list-disc list-inside">
                <li>Trabalho com dados socioeconômicos e biomarcadores sanguíneos e genéticos;</li>
                <li>Utilizo MacOS, linguagens Python e R e diversas bibliotecas como Tidymodels, Tidyverse, Scikit-learn, Pandas, Numpy para as análises;</li>
                <li>Utilizo Logistic Regression para fazer análise descritiva dos dados;</li>
                <li>Utilizo modelos preditivos de aprendizagem de máquina como Logistic Regression com Elastic-Net, Random Forest, XGBoost, LightBoost e Support Vector Machine;</li>
                <li>Utilizo banco de dados (RedCap).</li>
              </ul>
            </div>
          )}
        </div>

        <p>Atendente - McDonalds.</p>
      </div>
    </section>
  );
}

export default Experience;
