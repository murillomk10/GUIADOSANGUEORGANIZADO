import './sobreo.scss';

export default function SobreHome() {
  return (
    <div className='container-sobre'>
      <div className='cartoes'>
        <h1 data-aos="fade-up">Sobre o Projeto</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          O Guia do Sangue é uma iniciativa para conectar <br /> 
          doadores de sangue com hemocentros da Grande São Paulo. <br />
          Nosso objetivo é aumentar o número de doações <br />
          e salvar vidas através da informação.
        </p>
      </div>
    </div>
  );
}
