import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import coracao from "../assets/coracao.svg";
import gota from "../assets/gota.svg";
import ajuda from "../assets/ajuda.svg";
import "../pages/porque.scss";

export default function PorQueDoar() {
  return (
    <div className="container-porque">
      <Cabecalho />

      <section className="conteudo-principal">
        <h1 className="titulo">Por que doar sangue?</h1>
        <p className="texto-intro">
          Doar sangue é um ato simples, rápido e que pode salvar muitas vidas.  
          Cada doação é uma oportunidade de oferecer esperança e cuidar do próximo.
        </p>

        <div className="cards-container">
          <div className="card">
            <img src={gota} alt="Salva vidas" className="icone" />
            <div className="texto">
              <h2>Salva vidas</h2>
              <p>
                Uma única doação pode ajudar até quatro pessoas. Seu gesto simples
                tem o poder de mudar destinos.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={ajuda} alt="Ato solidário" className="icone" />
            <div className="texto">
              <h2>Ato de solidariedade</h2>
              <p>
                Doar é um ato de empatia. É compartilhar o que temos de mais valioso:
                a vida.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={coracao} alt="Benefício mútuo" className="icone" />
            <div className="texto">
              <h2>Faz bem para você</h2>
              <p>
                Além de ajudar o próximo, a doação estimula a saúde, o autocuidado
                e a consciência coletiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="historias-inspiradoras">
  <h2 className="titulo-secundario">💡 Histórias que Inspiram</h2>
  <div className="cards-historias">
    <div className="card-historia">
      <img src={coracao} alt="Pessoa 1" className="foto" />
      <div className="texto">
        <p>
          "Comecei a doar sangue aos 18 anos e desde então percebo o quanto é gratificante salvar vidas."
        </p>
        <span className="autor">— Maria, São Paulo</span>
      </div>
    </div>

    <div className="card-historia inverso">
      <img src={gota} alt="Pessoa 2" className="foto" />
      <div className="texto">
        <p>
          "Doar sangue é um gesto simples, mas que faz uma diferença enorme para quem precisa."
        </p>
        <span className="autor">— João, Rio de Janeiro</span>
      </div>
    </div>

    <div className="card-historia">
      <img src={ajuda} alt="Pessoa 3" className="foto" />
      <div className="texto">
        <p>
          "Saber que minha doação pode ajudar várias pessoas me motiva a continuar sempre."
        </p>
        <span className="autor">— Ana, Belo Horizonte</span>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
