import minhaImagem from '../../assets/bannerhero.png';
import { Link } from 'react-router';


export default function MeuComponente() {
  return (
    <div className='Container-herosection'>
        <div className='conteudo-hero'>
        <h1 className='titulo-principal'>Doe Sangue, salve vidas</h1>
        <p className='texto-principal'>Encontre um posto de doação mais proximo de você na Grande São Paulo</p>
        <button className='btn-hero'><Link to='/ondedoar'>encontre um local para doação</Link></button>
        <button className='btn-hero'><Link to='/agendamento'>Agende sua Doação</Link></button>
      </div>  
    </div>
  );
}

 MeuComponente;