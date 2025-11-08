import * as repo from "../repository/usuarioRepository.js";
import { Router } from "express";
import { getAuthentication, generateToken } from "../utils/jwt.js";


const endpoints = Router();
const autenticar = getAuthentication();



endpoints.post('/usuario', async  (req, resp) => {
    try {
        const novoUsuario = req.body

        let id = await repo.cadastrarusuario(novoUsuario);
        resp.send({id: id,
          mensagem: 'usuario cadastrado'
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

endpoints.post('/usuario/login', async (req, resp) => {
  try {
    const { email, senha } = req.body;

    // Validação básica dos campos obrigatórios
    if (!email || !senha) {
      return resp.status(400).send({ 
        erro: 'Email e senha são obrigatórios' 
      });
    }

    let credenciais = await repo.validarUsuario(email, senha);
    
    let token = generateToken(credenciais);
    resp.send({
      token: token,
      usuario: {
        id: credenciais.id,
        nome: credenciais.nome,
        email: credenciais.email
      }
    });

  } catch (error) {
    console.error('Erro no endpoint de login:', error);

    // Retorna mensagens específicas baseadas no tipo de erro
    if (error.name === 'ValidationError') {
      return resp.status(400).send({ 
        erro: 'Dados inválidos',
        detalhes: error.errors // Retorna os erros específicos do Yup
      });
    }
    
    if (error.message === "Email não encontrado") {
      return resp.status(404).send({ 
        erro: 'Email não encontrado' 
      });
    }
    
    if (error.message === "Senha incorreta") {
      return resp.status(401).send({ 
        erro: 'Senha incorreta' 
      });
    }

    // Erro genérico para outros casos
    resp.status(500).send({ 
      erro: 'Erro interno do servidor. Tente novamente.'
    });
  }
});

endpoints.get('/', (req, res) => {
  res.json({ message: 'Backend funcionando!' });
});

export default endpoints;