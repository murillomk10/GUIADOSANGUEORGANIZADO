import * as repo from '../repository/perfilUsuarioRepository.js';
import { Router } from 'express';
import { getAuthentication } from "../utils/jwt.js";
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const endpoints = Router();
const autenticar = getAuthentication();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = './src/uploads/profiles/';
    
    // Cria diretório se não existir
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Nome único para o arquivo: timestamp + idUsuario + extensão
    const idUsuario = req.usuario.id;
    const timestamp = Date.now();
    const extensao = path.extname(file.originalname);
    cb(null, `profile_${idUsuario}_${timestamp}${extensao}`);
  }
});

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Apenas imagens são permitidas (JPEG, JPG, PNG, GIF, WEBP)'));
  }
};

export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: fileFilter
});

// Endpoint para upload de foto
endpoints.post('/usuario/foto-perfil', autenticar, upload.single('foto'), async (req, resp) => {
  try {
    if (!req.file) {
      return resp.status(400).send({ erro: 'Nenhuma imagem enviada' });
    }

    const idUsuario = req.usuario.id;
    const caminhoFoto = `/uploads/profiles/${req.file.filename}`;

    // Atualiza no banco de dados
    const sucesso = await repo.atualizarFoto(idUsuario, caminhoFoto);

    if (sucesso) {
      resp.send({
        message: 'Foto de perfil atualizada com sucesso',
        foto_url: caminhoFoto
      });
    } else {
      // Remove o arquivo se não conseguiu salvar no banco
      fs.unlinkSync(req.file.path);
      resp.status(500).send({ erro: 'Erro ao atualizar foto no banco de dados' });
    }

  } catch (error) {
    // Remove o arquivo em caso de erro
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    
    console.error("Erro no upload de foto:", error);
    resp.status(500).send({ erro: 'Erro interno do servidor' });
  }
});

// Endpoint para remover foto de perfil
endpoints.delete('/usuario/foto-perfil', autenticar, async (req, resp) => {
  try {
    const idUsuario = req.usuario.id;
    
    // Busca usuário para pegar o caminho da foto atual
    const usuario = await repo.buscarUsuarioPorId(idUsuario);
    
    if (usuario && usuario.foto_perfil) {
      // Remove o arquivo físico
      const caminhoArquivo = `.${usuario.foto_perfil}`;
      if (fs.existsSync(caminhoArquivo)) {
        fs.unlinkSync(caminhoArquivo);
      }
    }

    // Atualiza no banco para NULL
    await repo.atualizarFoto(idUsuario, null);

    resp.send({ message: 'Foto de perfil removida com sucesso' });

  } catch (error) {
    console.error("Erro ao remover foto:", error);
    resp.status(500).send({ erro: 'Erro interno do servidor' });
  }
});

// Endpoint para buscar dados do usuário logado
endpoints.get('/usuario/perfil', autenticar, async (req, resp) => {
  try {
    const idUsuario = req.usuario.id;
    const usuario = await repo.buscarUsuarioPorId(idUsuario);

    if (usuario) {
      resp.send(usuario);
    } else {
      resp.status(404).send({ erro: 'Usuário não encontrado' });
    }

  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    resp.status(500).send({ erro: 'Erro interno do servidor' });
  }
});

endpoints.post('/perfil/usuario', autenticar, upload.single('foto'), async (req, resp) => {
    try {
        
    } catch (error) {
        
    }
})