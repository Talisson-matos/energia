import React from 'react';
import { useLocation } from 'react-router-dom';

// Carregando os componentes dinamicamente com React.lazy
const EnergiaText = React.lazy(() => import('../../content/EnergiaText'));
const EletricaText = React.lazy(() => import('../../content/EletricaText'));
const QuimicaText = React.lazy(() => import('../../content/QuimicaText'));
const OpticaText = React.lazy(() => import('../../content/OpticaText'));
const AcusticaText = React.lazy(() => import('../../content/AcusticaText'));
const NuclearText = React.lazy(() => import('../../content/NuclearText'));
const TermicaText = React.lazy(() => import('../../content/TermicaText'));
const MecanicaText = React.lazy(() => import('../../content/MecanicaText'));

const DefinicaoCientifica = () => {
  const location = useLocation();

  const conteudos: { [key: string]: string | React.ReactNode } = {
    "/": <EnergiaText />,
    "/eletrica": <EletricaText />,
    "/mecanica": <MecanicaText />,
    "/quimica": <QuimicaText />,
    "/optica": <OpticaText />,
    "/acustica": <AcusticaText />,
    "/nuclear": <NuclearText />,
    "/termica": <TermicaText />,
  };

  const texto = conteudos[location.pathname] || "Rota não encontrada";

  return (
    <div>     
      <React.Suspense fallback={<p>Carregando conteúdo...</p>}>
        <p>{texto}</p>
      </React.Suspense>
    </div>
  );
};

export default DefinicaoCientifica;
