import * as repo from '../repository/adminRepository.js';
import { Router } from 'express';
import { getAuthentication } from "../utils/jwt.js";

const endpoints = Router();
const autenticar = getAuthentication();


endpoints.get('/admin/agendamentos', autenticar, async (req, resp) => {
    const registros = await repo.listarAgendamentos();
    resp.send(registros)
})

endpoints.post('/admin/autorizar:id', autenticar, async (req, resp) => {
    const id = req.params.id;

    await repo.autorizarAgendamento(id);
})

endpoints.get('/admin/grafico', async (req, resp) => {
    const resultado = await repo.graficoSangue();
    resp.send(resultado)
})

export default endpoints;