import { Injectable } from '@angular/core';
import { Aluno } from '../classes/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

    alunosMock: Aluno[] = [
      {
        id: 1,
        nome: "João Silva",
        dataNascimento: new Date("1990-05-15"),
        email: "joao.silva@email.com",
        dataPagamento: new Date("2023-04-01"),
        sexo: "M",
        telefone: "(11) 98765-4321",
        altura: "1.75",
        pesoInicial: "70kg",
        pesoAtual: "75Kg"
      },
      {
        id: 2,
        nome: "Maria Souza",
        dataNascimento: new Date("1985-09-10"),
        email: "maria.souza@email.com",
        dataPagamento: new Date("2023-03-28"),
        sexo: "F",
        telefone: "(21) 91234-5678",
        altura: "1.65",
        pesoInicial: "60kg",
        pesoAtual: "80Kg"
      },
      {
        id: 3,
        nome: "Pedro Almeida",
        dataNascimento: new Date("1992-12-20"),
        email: "pedro.almeida@email.com",
        dataPagamento: new Date("2023-05-05"),
        sexo: "M",
        telefone: "(31) 99876-5432",
        altura: "1.80",
        pesoInicial: "80Kg",
        pesoAtual: "72Kg"
      }
    ];

  public  inserir(input: Aluno){
    this.alunosMock.push(input);
  }

  public obterAlunos(){
      return this.alunosMock;
  }

  public obterAlunoPorId(id:number){
    return this.alunosMock.find(t=>t.id == id);
  }

  public removerAluno(id:number){
    const index = this.alunosMock.findIndex(t => t.id === id);
    if (index !== -1) {
      this.alunosMock.splice(index, 1);
    }
  }
  public editarAluno(input: Aluno){
    const index = this.alunosMock.findIndex(t => t.id === input.id);
    this.alunosMock[index] = input;
  }

  constructor() { }
}
