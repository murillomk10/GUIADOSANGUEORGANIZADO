import Cadastro from "../cadastro"
import "./styles.scss"
import { Link } from "react-router"
import Cabecalho from "../../components/cabecalho"

export default function Login() {
    return(
        <div className="body">
          <Cabecalho/>
        <main>
      <div class="conteiner">
        <div class="titulo">
          <h1>Faça seu Login</h1>
        </div>
        <div class="botoes">
          <div class="botao">
            <label for="">E-mail</label>
            <input type="text" />
          </div>

          <div class="botao">
            <label for="">Senha</label>
            <input type="text" />
            <Link to="/" className="recuperar-senha" >Esqueceu a senha?</Link>
          </div>
        </div>
        <div>
          <button>Entrar</button>
        </div>
       </div> 
       <Link to='/cadastro' className="link-cadastro">Sem cadastro ainda? cadastrar-se</Link>
    </main>
        </div>
    )
}