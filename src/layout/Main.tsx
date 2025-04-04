import DefinicaoCientifica from '../components/main/DefinicaoCientifica';

const Main = () => {
  return (
    <div >       
      <DefinicaoCientifica key={location.pathname}/>            
    </div>
  )
}

export default Main