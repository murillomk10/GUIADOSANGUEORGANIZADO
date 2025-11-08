import { conection } from "./server.js";

export async function listarAgendamentos() {
    const comando = `
    select * from agendamento
    `
    const [registros] = await conection.query(comando)
    return registros
}

export async function listarUsuarios() {
    const comando = `
    select * from Usuarios
    `
    const [registros] = await conection.query(comando)
    return registros
}

export async function autorizarAgendamento(id) {
    

    try {
     const comando = `
    update agendamento 
    set autorizado = ?
    where id = ?
    `
    if (!id) {
        return null
    }
    const [info] = await conection.query(comando, [id]);
    return info   
    } catch (error) {
        
    }
}

export async function graficoSangue() {
    const comando = `
    select tipo_sanguineo from Usuario
    `

    const [resultado] = await conection.query(comando)
    return resultado;
}