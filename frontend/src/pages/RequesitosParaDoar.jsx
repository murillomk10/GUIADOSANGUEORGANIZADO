import Cabecalho from '../components/cabecalho';
import './Requisitos.scss';
import cardao from '../assets/cardao.png'

export default function RequesitosParaDoar() {
  return (
   <div className="container-requesitos">
     <Cabecalho />
        <h1 className='titulo-principal'>Requistos para doar</h1>
        <p className='texto-inicial'>A doação de sangue é bem complexa, pois é preciso seguir <br /> critérios especifícos, para garantir a segurança do doador e do <br /> receptor. <br /> Confira se você atende as especificações para poder doar e salvar vidas</p>

     <div className="card-requisitos">
  <div className="linha"></div>

  <div className="conteudo">
    <h2>
      <span className="emoji">✅</span> Requisitos Básicos
    </h2>
    <ul>
      <li>Ter entre 16 e 69 anos (menores de 18 precisam de autorização do responsável legal).</li>
      <li>Pesar no mínimo 50 kg.</li>
      <li>Estar em boas condições de saúde no dia da doação.</li>
      <li>Apresentar documento original com foto (RG, CNH, Carteira de Trabalho, etc.).</li>
    </ul>
  </div>
</div>

<div className="card-impedimentos">
  <div className="linha"></div>

  <div className="conteudo">
    <h2>
      <span className="emoji">🚫</span> Impedimentos Definitivos
    </h2>

    <p className="aviso">
      (Atenção: nestes casos, a doação não é permitida)
    </p>

    <ul>
      <li>Ter tido hepatite após os 11 anos de idade.</li>
      <li>Diagnóstico de HIV/AIDS, Hepatite B ou C, HTLV ou Doença de Chagas.</li>
      <li>Uso de drogas ilícitas injetáveis.</li>
      <li>Histórico de câncer ou doenças crônicas graves (cardíacas, renais, hepáticas).</li>
      <li>Diabetes com complicações vasculares.</li>
    </ul>
  </div>
</div>
    <div class="card">
  <div class="line"></div>
  <div class="content">
    <h2>🕒 Impedimentos Temporários</h2>
    <p class="alerta">
      (Atenção: esses cenários impedem a doação por um período determinado)
    </p>
    <ul>
      <li>Gripe/resfriado: 7 dias sem sintomas</li>
      <li>Gravidez: 90 dias (parto normal) ou 180 dias (cesárea)</li>
      <li>Amamentação: bebê menor de 12 meses</li>
      <li>Bebida alcoólica: nas últimas 12 horas</li>
      <li>Tatuagem/piercing: 12 meses</li>
      <li>Procedimentos dentários: 7 dias</li>
      <li>Endoscopia/colonoscopia: 6 meses</li>
      <li>Vacinas: 48 horas a 4 semanas</li>
      <li>Doenças como dengue: 30 dias após cura</li>
    </ul>
  </div>
</div>
    <div class="card-aqui">
  <div class="line"></div>
  <div class="content">
    <h2>✈️ Viagens Recentes</h2>
    <ul>
      <li>
        Quem viajou para estados com risco de malária (como Acre, Amazonas,
        Amapá) deve aguardar 12 meses para doar.
      </li>
      <li>
        Quem morou na Europa após 1980 precisa passar por uma avaliação
        especial no hemocentro.
      </li>
    </ul>
  </div>
</div>

<div className='card-info'>
   <div class='line'></div>
   <div className='contant'>
    <h2>⚠️️️ Informações Importantes</h2>
      <ul>
        <li>Não é necessário jejum! Pelo contrário: alimente-se bem (evitando gordura) e hidrate-se antes.</li>
        <li>Todo o material utilizado é estéril, descartável e de uso único, garantindo sua segurança.</li>
        <li>Seja sincero na triagem. Sua honestidade é fundamental para a sua segurança e de quem vai receber.</li>
      </ul>
       </div>
</div>
          <div className='card-agendamento'>
            <img className='cardao' src={cardao} alt="cardenorme" />
            <button className="btn">Agende sua doação aqui</button>
          </div>


   </div>
  )

}