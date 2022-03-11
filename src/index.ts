
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
const readline = require('readline-sync');
const db = require('../models/index.js')

dotenv.config();


if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());


app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);

	const qtd = parseInt(readline.question('Qual a quantidade de alunos? '));
	
	for (let i = 0; i < qtd; i++) {
		
	const name = readline.question('Qual o nome do aluno? ');

	const nota = parseFloat(readline.question('Qual a nota do aluno? '));

				
	 await db.Aluno.create({nome: name, nota: nota});

	let mat;
	const nomeCurso = readline.question("Qual o nome do Curso? ");
		
	const matricula = readline.question("O aluno está matriculado nesse curso? (S / N) ");

		if (matricula.toUpperCase() == "S"){
	mat = true;
	}else {
	 mat = false;
	 }
	 await db.Curso.create({nome: nomeCurso, matricula: mat});

	}	

	const users = await db.Aluno.findAll();
	console.log("All users:", JSON.stringify(users, null));
	
	console.log(users);

	//Update
	const item = await db.Aluno.findByPk(8);
	item.nome = "João";
	item.nota = 8; 
	item.save();

	console.log(item);
	
	// // Delete
	// const del = await db.Aluno.findByPk(3);
	// del.destroy();

	// console.log("item na com id 5: " + del);
	
});
