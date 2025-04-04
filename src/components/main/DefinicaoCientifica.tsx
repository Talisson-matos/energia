import React from 'react';
import { useLocation } from 'react-router-dom';
import EnergiaText from '../../content/EnergiaText'; 
import EletricaText from '../../content/EletricaText';
import QuimicaText from '../../content/QuimicaText';
import OpticaText from '../../content/OpticaText';
import AcusticaText from '../../content/AcusticaText';
import NuclearText from '../../content/NuclearText';
import TermicaText from '../../content/TermicaText';
import MecanicaText from '../../content/MecanicaText';


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
  }

  const texto = conteudos[location.pathname]

  return (
    <div>
      <p>{texto}</p>
    </div>
  )
}

export default DefinicaoCientifica