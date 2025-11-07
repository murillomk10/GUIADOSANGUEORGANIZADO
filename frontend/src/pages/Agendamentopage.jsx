import { useState } from "react";
import "./AgendamentoPage.scss";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";

export default function Agendamento() {
  // estados para controlar quando mostrar os campos extras
  const [resposta1, setResposta1] = useState("");
  const [resposta2, setResposta2] = useState("");
  const [resposta3, setResposta3] = useState("");

  return (
    <div className="container-agendamento">
      <Cabecalho />

      <main className="conteudo-agendamento">
        <h1>Agende sua Doação</h1>
        <p>Responda as perguntas abaixo para continuar com seu agendamento:</p>

        {/* PERGUNTA 1 */}
        <div className="pergunta">
          <label>Você já doou sangue antes?</label>
          <div className="opcoes">
            <label>
              <input
                type="radio"
                name="doouAntes"
                value="sim"
                onChange={() => setResposta1("sim")}
                checked={resposta1 === "sim"}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="doouAntes"
                value="nao"
                onChange={() => setResposta1("nao")}
                checked={resposta1 === "nao"}
              />
              Não
            </label>
          </div>

          {/* aparece apenas se o usuário marcar "Sim" */}
          {resposta1 === "sim" && (
            <input
              type="date"
              className="campo-extra"
              placeholder="Quando foi sua última doação?"
            />
          )}
        </div>

        {/* PERGUNTA 2 */}
        <div className="pergunta">
          <label>Você está se sentindo bem hoje?</label>
          <div className="opcoes">
            <label>
              <input
                type="radio"
                name="bemHoje"
                value="sim"
                onChange={() => setResposta2("sim")}
                checked={resposta2 === "sim"}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="bemHoje"
                value="nao"
                onChange={() => setResposta2("nao")}
                checked={resposta2 === "nao"}
              />
              Não
            </label>
          </div>

          {/* aparece apenas se marcar "Não" */}
          {resposta2 === "nao" && (
            <textarea
              className="campo-extra"
              placeholder="Conte-nos o motivo..."
            ></textarea>
          )}
        </div>
        <div className="pergunta">
            <label>pergunta?</label>
            <div className="opcoes">
                <label> 
                    <input type="radio"
                    name="opcaonova"
                    value="sim"
                    onChange={() => setResposta3("sim")}
                    checked={resposta3 === "sim"}
                     />
                </label>
                Sim
                <label>
                    <input
                    type="radio"
                    name="opcaonova2"
                    value="nao"
                    onChange={() => setResposta3("nao")} 
                    />
                    Não
                </label>
            </div>

        {resposta3 === "sim" && (
            <input 
            type="text"
            className="campo-extra"
            placeholder="QADADA?" />
        )}
        </div>


        <button className="btn-enviar">Enviar Agendamento</button>
      </main>

      <Footer />
    </div>
  );
}
