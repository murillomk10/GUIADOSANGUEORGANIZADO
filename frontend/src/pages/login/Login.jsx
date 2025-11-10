import { Link } from "react-router";
import "./login.scss";
import Cabecalho2 from "../../components/cabecalho2";

export default function Login() {
  return (
    <div className="container-login">
      <Cabecalho2 />
      
      <main>
        <div className="card">
          <div className="titulo">
            <h1>Faça seu Login</h1>
          </div>

          <div className="botoes">
            <div className="botao">
              <label>E-mail</label>
              <input type="email" />
            </div>

            <div className="botao">
              <label>Senha</label>
              <input type="password" />
              <Link to="/" className="recuperar-senha">Esqueceu a senha?</Link>
            </div>
          </div>

          <button>Entrar</button>
        </div>

        <Link to="/cadastro" className="link-cadastro">
          Sem cadastro ainda? Cadastre-se
        </Link>
      </main>
    </div>
  );
}
