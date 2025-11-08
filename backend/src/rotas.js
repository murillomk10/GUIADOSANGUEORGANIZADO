import usuarioControler from "./controller/usarioController.js";
import agendamentoController from "./controller/agendamentoController.js"

export async function adicionarRotas(api) {
    api.use(usuarioControler);
    api.use(agendamentoController);
}