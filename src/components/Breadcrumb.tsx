
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/_breadcrump.scss';


// Mapeamento de caminhos para rótulos legiveis
const pathToLabelMap: Record<string, string> = {
  '/': 'Energia',
  '/eletrica': 'Energia Elétrica',
  '/mecanica': 'Energia Mecânica',
  '/quimica': 'Energia Química',
  '/termica': 'Energia Térmica',
  '/nuclear': 'Energia Nuclear',
  '/optica': 'Energia Óptica',
  '/acustica': 'Energia Acústica',
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const [pathSegments, setPathSegments] = useState<{path: string, label: string}[]>([]);
  
  useEffect(() => {
    // Resetar os segmentos sempre que a localização mudar
    const currentPath = location.pathname;
    
    if (currentPath === '/') {
      // Caso especial para a página inicial
      setPathSegments([{ path: '/', label: 'Energia' }]);
      return;
    }
    
    // Para outros caminhos, construir a hierarquia de breadcrumb
    const segments: {path: string, label: string}[] = [
      { path: '/', label: 'Energia' } // Sempre começa com a home
    ];
    
    // Adicionar o caminho atual
    if (pathToLabelMap[currentPath]) {
      segments.push({
        path: currentPath,
        label: pathToLabelMap[currentPath]
      });
    }
    
    setPathSegments(segments);
  }, [location.pathname]);
  
  if (pathSegments.length <= 1) {
    return null; // Não mostrar breadcrumb na página inicial
  }
  
  return (
    <div className="breadcrumb-container">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment.path}>
          {index > 0 && <span className="breadcrumb-separator"> // </span>}
          {index === pathSegments.length - 1 ? (
            // Último item (atual) não é clicável
            <span className="breadcrumb-current">{segment.label}</span>
          ) : (
            // Itens anteriores são clicáveis
            <Link to={segment.path} className="breadcrumb-link">
              {segment.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;