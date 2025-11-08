import { conection } from "./server.js";
import yup from "yup";
import bcrypt from "bcrypt";

const usuarioSchema = yup.object({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .trim()
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),

  email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório")
    .lowercase()
    .test("email-domain", "Domínio de email não permitido", (value) => {
      return !value.endsWith("@temp.com");
    }),

  senha_hash: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
    ),

  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato: XXX.XXX.XXX-XX"),

  rg: yup
    .string()
    .required("RG é obrigatório")
    .matches(/^\d{2}\.\d{3}\.\d{3}-\d{1}$/, "Formato: xx.xxx.xxx-x"),

  tipo_sanguineo: yup
    .string()
    .required("Tipo sanguíneo é obrigatório")
    .oneOf(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], "Tipo sanguíneo inválido"),

  sexo_biologico: yup
    .string()
    .required("Sexo biológico é obrigatório")
    .oneOf(["masculino", "feminino"], "Deve ser masculino ou feminino"),

  numero_telefone: yup
    .string()
    .required("Número de telefone é obrigatório")
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato: (XX) XXXXX-XXXX"),

  nome_do_responsavel: yup
    .string()
    .required()
    .nullable()
    .trim()
    .matches(/^[a-zA-ZÀ-ÿ\s]*$/, "Nome do responsável deve conter apenas letras"),

  data_nascimento: yup
    .date()
    .required("Data de nascimento é obrigatória")
    .max(new Date(), "Data de nascimento não pode ser futura")
    .test("age", "Deve ter pelo menos 18 anos", (value) => {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }),

  endereco_completo: yup
    .string()
    .required("Endereço completo é obrigatório")
    .min(10, "Endereço deve ter no mínimo 10 caracteres")
    .max(200, "Endereço deve ter no máximo 200 caracteres")
});

const loginSchema = yup.object({
  email: yup
    .string()
    .email("email invalido")
    .lowercase()
    .test("email-domain", "Domínio de email não permitido", (value) => {
      return !value.endsWith("@temp.com");
    }),

 senha_hash: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
    ),
})

export async function cadastrarusuario(novoUsuario) {
  try {
    await usuarioSchema.validate(novoUsuario);

    const senhaHash = await bcrypt.hash(novoUsuario.senha_hash, 12);

    const comando = `
    INSERT INTO Usuarios (nome, email, senha_hash, cpf, rg, tipo_sanguineo, sexo_biologico, numero_telefone, nome_do_responsavel, data_nascimento, endereco_completo) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?)
    `;

    const [info] = await conection.query(comando, [
      novoUsuario.nome,
      novoUsuario.email,
      senhaHash, // ← Já é a senha com hash
      novoUsuario.cpf,
      novoUsuario.rg,
      novoUsuario.tipo_sanguineo, // ← Corrigido: era 'sangue'
      novoUsuario.sexo_biologico,  // ← Corrigido: era 'sexo'
      novoUsuario.numero_telefone, // ← Corrigido: era 'numero'
      novoUsuario.nome_do_responsavel, // ← Corrigido: era 'responsavel'
      novoUsuario.data_nascimento,
      novoUsuario.endereco_completo // ← Corrigido: era 'endereco'
    ]);

    return info.insertId;
  } catch (error) {
    console.error("erro de cadastro", error);
    throw error;
  }
}

export async function validarUsuario(email, senha) {
  try {
    const emailNormalizado = email.toLowerCase().trim()
    await loginSchema.validate({email: emailNormalizado, senha_hash: senha})
  
    const comando = `
            SELECT id_usuario,
                   nome,
                   email,
                   senha_hash
              FROM usuarios
             WHERE email = ?
        `;

    const [registros] = await conection.query(comando, [emailNormalizado]);

    if (registros.length === 0) {
      return null;
    }

    const usuario = registros[0];

    
    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

    if (senhaValida) {
      
      return {
        id: usuario.id_usuario,
        nome: usuario.nome,
        email: usuario.email,
      };
    } else {
      return null;
    }
  } catch (error) {
   
    console.error("Erro ao validar usuário:", error);
    throw error;
  }
}

