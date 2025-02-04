import {z} from "zod";
import { log } from "console";
import sqlite3 from "sqlite3";

const usuarioSchema = z.object({
  nome: z.string().min(3).max(50),
  email: z.string().email(),
  senha: z.string().min(6),
});

function verificarUsuario(nome:string, email:string, senha:string): boolean {
  const resultado = usuarioSchema.safeParse({ nome, email, senha });

  if (resultado.success) {
    console.log("Usuário válido!");
    return true;
  } else {
    console.error("Usuário inválido:", resultado.error);
    return false;
  }
}

const db = new sqlite3.Database("./data/eventos.db");

function criarTabelaUsuario(): void {
  const query = `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, senha TEXT)`;
  db.run(query, (error) => {
    if (error) {
      console.error("Erro ao criar a tabela de usuários", error.message);
    } else {
      console.log("Tabela de usuários criada com sucesso!");
    }
  });
}

function inserirUsuario(nome: string, email: string, senha: string): void {
  const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
  const values = [nome, email, senha];

  if(!verificarUsuario(values)){
    console.error("Usuário inválido");
  }
  else{
    db.run(query, values, function (error) {
      if (error) {
        console.error("Erro ao inserir usuário", error.message);
      } else {
        console.log(`Usuário ${this.lastID} inserido com sucesso!`);
      }
    });
  }
 

}

function listarTodosUsuarios(): void {
  const query = `SELECT * FROM usuarios`;
  db.all(query, (error, rows) => {
    if (error) {
      console.error("Erro ao buscar usuários", error.message);
    } else {
      console.log("Usuários encontrados com sucesso!");
      console.table(rows);
    }
  });
}

function listarUsuario(id: number): void {
  const query = `SELECT * FROM usuarios WHERE id = ?`;
  db.get(query, id, (error, row) => {
    if (error) {
      console.error("Erro ao buscar usuário", error.message);
    }
    else if (!row) {
      console.error("Usuário não encontrado");
    }
    else {
      console.log("Usuário encontrado com sucesso!");
      console.table(row);
    }
  });
}

function deletarUsuario(id: number): void {
  const query = `DELETE FROM usuarios WHERE id = ?`;
  const values = id;0

  db.run(query, values, function (error) {
    if (error) {
      console.error("Erro ao deletar usuário", error.message);
    } 
    else if (this.changes === 0) {
      console.log("Nenhuma usuário encontrado com este ID");
    }
    else {
      console.log(`Usuário deletado com sucesso!`);
    }
  });
}

function atualizarUsuario(id: number, nome: string, email: string, senha: string): void {
  const query = `UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?`;
  const values = [nome, email, senha, id];

  db.run(query, values, function (error) {
    if (error) {
      console.error("Erro ao atualizar usuário", error.message);
    } 
    else if (this.changes === 0) {
    console.log("Nenhuma usuário encontrado com este ID");
    
    }
    else {
      console.log(`Usuário atualizado com sucesso!`);}
  });
}

//atualizarUsuario(6,"golf","ttestegolf", "123golf");