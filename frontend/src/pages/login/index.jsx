import { Link} from "react-router";
import "./styles.scss";
import Cabecalho from "../../components/cabecalho";

import { useState} from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  return (
    <div className="container-login">
      <Cabecalho />

      <main>
        
        <div className="card">
          <div className="titulo">
            <h1>Faça seu Login</h1>
          </div>

          <div className="botoes">
            <div className="botao">
              <label>E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="botao">
              <label>Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Link to="/" className="recuperar-senha">
                Esqueceu a senha?
              </Link>
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