import { conection } from "./server.js";

export async function atualizarFoto(usuarioId, fotoCaminho) {
    const comando = `
    update perfil
    set foto_caminho =?
    where id = ?
    `

    const [info] = await conection.query(comando, [fotoCaminho, usuarioId])
    return info.effectedRows
}

export async function atualizarPerfil(usuarioId, novosDados) {
    const comando = `
    update usuario
    set nome = ?, email = ?, cpf = ?, rg ?, tipo_sanguineo = ?, sexo_biologico = ?, numero_telefone = ?, nome_do_responsavel = ?, data_nascimento = ?, endereco_completo = ?
    where id = ?
    `

    const [info] = await conexao.query(comando, [
            novosDados.nome,
            novosDados.email,
            novosDados.cpf,
            novosDados.rg,
            novosDados.tipo_sanguineo,
            novosDados.sexo_biologico,
            novosDados.numero_telefone,
            novosDados.nome_do_responsavel,
            novosDados.data_nascimento,
            novosDados.endereco_completo,
            usuarioId
        ]);

        return info.effectedRows
}