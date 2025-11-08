import express from "express";
import cors from 'cors'
import { adicionarRotas } from "./rotas.js";


const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);

const PORT = 3000; // ← Use 3000 para facilitar
api.listen(PORT, () => {
  console.log(`✅ Backend rodando em: http://localhost:${PORT}`);
});