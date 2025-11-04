import "./OndeDoar.scss";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";

export default function OndeDoar() {
  return (
    <div className="doar-page">
      <Cabecalho />

      <section className="doar-header">
        <h1>Encontre o posto de doação mais próximo de você</h1>
        <p>
          Veja os locais disponíveis em São Paulo — com horários, endereços e
          informações completas.
        </p>
      </section>

      <div className="doar-search-bar">
        <i className="fa fa-search icon"></i>
        <input type="text" placeholder="Procure por bairro ou hospital..." />
        <button>Buscar</button>
      </div>

      <div className="doar-table-container">
        <table className="doar-table">
          <thead>
            <tr>
              <th>Bairro</th>
              <th>Unidade</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aclimação</td>
              <td>Hospital do Servidor Público Municipal</td>
              <td>R. Castro Alves, 60 - 4º andar - Aclimação</td>
              <td>(11) 3277-5303</td>
              <td>
                <a href="https://www.colsan.org.br" target="_blank" rel="noreferrer">
                  colsan.org.br
                </a>
              </td>
            </tr>

            <tr>
              <td>Bela Vista</td>
              <td>Beneficência Portuguesa</td>
              <td>Rua Maestro Cardim, 1041 - Bela Vista, São Paulo - CEP 01323-001</td>
              <td>(11) 3505-4800 / (11) 3505-4839</td>
              <td>
                <a
                  href="http://www.bp.org.br/bp/pacientes-evisitantes/doacao-desangue-e-plaquetas"
                  target="_blank"
                  rel="noreferrer"
                >
                  bp.org.br
                </a>
              </td>
            </tr>

            <tr>
              <td>Bela Vista</td>
              <td>Hospital Sírio Libanês</td>
              <td>Rua Dona Adma Jafet, 91 - CEP 01308-050</td>
              <td>(11) 3394-5260</td>
              <td>
                <a
                  href="https://hospitalsiriolibanes.org.br/hospital/Paginas/bancos-de-sangue.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  hospitalsiriolibanes.org.br
                </a>
              </td>
            </tr>

            <tr>
              <td>Bela Vista</td>
              <td>Hospital Santa Catarina</td>
              <td>Av. Paulista, 200 - 4º andar - Bloco F</td>
              <td>(11) 3016-4111</td>
              <td>
                <a href="http://www.doeamor.com.br/" target="_blank" rel="noreferrer">
                  doeamor.com.br
                </a>
              </td>
            </tr>

            <tr>
              <td>Centro</td>
              <td>Hemocentro da Santa Casa de São Paulo</td>
              <td>Rua Marques de Itu, 579</td>
              <td>(11) 2176-7258</td>
              <td>
                <a href="https://www.santacasasp.org.br/doesangue" target="_blank" rel="noreferrer">
                  santacasasp.org.br
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
