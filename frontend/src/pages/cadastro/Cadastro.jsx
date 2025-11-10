import Cabecalho2 from "../../components/cabecalho2";
import "./Cadastro.scss";

export default function Cadastro() {
  return (
    <div className="cadastro-page">
      
      <Cabecalho2/>
      <main className="cadastro-main">
        <div className="cadastro-container">
          <div className="titulo">
            <h1>Preencha os campos abaixo para realizar seu cadastro:</h1>
          </div>

          <form className="form-cadastro">
            <div className="form-row">
              <div className="form-column">
                <div className="campo">
                  <label htmlFor="nome">NOME</label>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Nome Completo"
                  />
                </div>

                <div className="campo">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" placeholder="CPF + DIGITO" />
                </div>

                <div className="campo">
                  <label htmlFor="rg">RG</label>
                  <input type="text" id="rg" placeholder="..." />
                </div>

                <div className="campo">
                  <label htmlFor="telefone">NÚMERO DE TELEFONE</label>
                  <input type="tel" id="telefone" placeholder="Digite aqui" />
                </div>

                <div className="campo">
                  <label htmlFor="nascimento">DATA DE NASCIMENTO</label>
                  <input type="date" id="nascimento" />
                </div>

                <div className="campo">
                  <label htmlFor="mae">Nome da Mãe ou Responsável</label>
                  <input
                    type="text"
                    id="mae"
                    placeholder="Nome Completo"
                  />
                </div>

                <div className="campo">
                  <label htmlFor="endereco">ENDEREÇO COMPLETO</label>
                  <textarea
                    id="endereco"
                  placeholder="Casa, Rua e Cep..."
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="form-column">
                <div className="campo">
                  <label htmlFor="sexo">SEXO BIOLÓGICO</label>
                  <select id="sexo">
                    <option value="">Selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                  </select>
                </div>

                <div className="campo">
                  <label htmlFor="tipo-sanguineo">TIPO SANGUÍNEO</label>
                  <select id="tipo-sanguineo">
                    <option value="">Selecione</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                  </select>
                </div>

                <div className="campo">
                  <label htmlFor="email">E-MAIL</label>
                  <input type="email" id="email" placeholder="" />
                </div>

                <div className="campo">
                  <label htmlFor="confirmar-email">CONFIRMAÇÃO DO E-MAIL</label>
                  <input
                    type="email"
                    id="confirmar-email"
                    placeholder=""
                  />
                </div>

                <div className="campo">
                  <label htmlFor="senha">SENHA</label>
                  <input type="password" id="senha" placeholder="" />
                </div>

                <div className="campo">
                  <label htmlFor="confirmar-senha">CONFIRMAÇÃO DA SENHA</label>
                  <input
                    type="password"
                    id="confirmar-senha"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div className="botoes">
              <button type="button" className="botao cancelar">
                Cancelar
              </button>
              <button type="submit" className="botao cadastrar">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
