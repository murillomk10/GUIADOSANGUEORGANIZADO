import { conection } from "./server.js";

export async function criarAgendamento(novoAgendamento) {
    try {
        const comando = `
            INSERT INTO Agendamento (
        primeira_doacao, ultima_doacao, doenca_ultima_semana, 
        data_da_doenca, uso_medicamento, condicao, 
        tem_doenca_cronica, qual_doenca_cronica, esta_controlada, 
        viajou_nos_ultimos_meses, qual_pais, data_viagem, 
        tem_ist, relacao_nos_ultimos_meses, data_relacao, 
        contato_com_pessoaIST, data_contato, usou_drogas, 
        data_usada, recebeu_transfusao, data_transfusao, 
        ta_gravida, quantos_meses, esta_amamentando, 
        bebe_tem_menos_de_12, aceita_mensagen
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const [resultado] = await conection.query(comando, [
            novoAgendamento.primeira_doacao,
      novoAgendamento.ultima_doacao,
      novoAgendamento.doenca_ultima_semana,
      
      // Segunda linha
      novoAgendamento.data_da_doenca,
      novoAgendamento.uso_medicamento,
      novoAgendamento.condicao,
      
      // Terceira linha
      novoAgendamento.tem_doenca_cronica,
      novoAgendamento.qual_doenca_cronica,
      novoAgendamento.esta_controlada,
      
      // Quarta linha
      novoAgendamento.viajou_nos_ultimos_meses,
      novoAgendamento.qual_pais,
      novoAgendamento.data_viagem,
      
      // Quinta linha
      novoAgendamento.tem_ist,
      novoAgendamento.relacao_nos_ultimos_meses,
      novoAgendamento.data_relacao,
      
      // Sexta linha
      novoAgendamento.contato_com_pessoaIST,
      novoAgendamento.data_contato,
      novoAgendamento.usou_drogas,
      
      // Sétima linha
      novoAgendamento.data_usada,
      novoAgendamento.recebeu_transfusao,
      novoAgendamento.data_transfusao,
      
      // Oitava linha
      novoAgendamento.ta_gravida,
      novoAgendamento.quantos_meses,
      novoAgendamento.esta_amamentando,
      
      // Último campo
      novoAgendamento.bebe_tem_menos_de_12,
      novoAgendamento.aceita_mensagen
    ]);

        return resultado.insertId;
        
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        throw error;
    }
}