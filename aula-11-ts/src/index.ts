import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./data/eventos.db");

function criarTabelaUsuario():void {
  const query = `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, senha TEXT)`;

  db.run(query, (error) => {
    if (error) {
      console.error("Erro ao criar a tabela de usuários", error.message);
    } else {
      console.log("Tabela de usuários criada com sucesso!");
    }
  });
}

function inserirUsuario(nome:string, email:string, senha:string):void {
    const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    const values = [nome, email, senha];

    db.run(query, values, function (error) {
      if (error) {
        console.error("Erro ao inserir usuário", error.message);
      } else {
        console.log(`Usuário ${this.lastID} inserido com sucesso!`);
      }
    });
  
}

function listarTodosUsuarios():void {
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

function deletarUsuario(id:number):void {
const query = `DELETE FROM usuarios WHERE id = ?`;
const values = id;

db.run(query, values,  function (error) {
    if (error) {
        console.error("Erro ao deletar usuário", error.message);
    } else {
        console.log(`Usuário deletado com sucesso!`);
    }
});
}

inserirUsuario("João", "teste", "abc123");
listarTodosUsuarios();