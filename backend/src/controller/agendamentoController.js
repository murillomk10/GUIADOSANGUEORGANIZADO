import * as repo from "../repository/agendamentoRepository.js"
import { Router } from "express";
import { getAuthentication } from "../utils/jwt.js";


const endpoints = Router();
const autenticar = getAuthentication();

endpoints.post('/agendamento', autenticar, async (req, resp) => {
    try {
        const novoAgendamento = req.body
        
        let id = await repo.criarAgendamento(novoAgendamento)
        resp.send({id: id,
          mensagem: 'Agendamento criado'
        })


    } catch (error) {
        if (error.name === 'ValidationError') {
            return resp.status(400).send({ 
                erro: "Dados inválidos",
                detalhes: error.errors 
            });
        }
    }
})

export default endpoints;