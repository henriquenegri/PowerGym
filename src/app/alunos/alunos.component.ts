 import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Aluno } from '../classes/aluno';
import { AlunoService } from '../services/aluno.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  alunos: Aluno[] = [];
  idAluno?: number;

  constructor(private service: AlunoService){
    
  }

  ngOnInit(): void {
    this.obterAlunos();
  }

  obterAlunos(){
    this.service.obterAlunos().subscribe({
      next: (dados: Aluno[]) => {
        this.alunos = dados;
        console.log("Alunos carregados: ", dados);
      },
      error: (erro: any) => {
        console.log("Erro ao carregar os alunos: ", erro);
      }
    })
  }

  setIdAluno(id?: number){
    this.idAluno = id;
  }

  deletar(id?: number){
    this.service.removerAluno(id).subscribe({
      next: () => {
        console.log("Aluno removido com sucesso");
      },
      error: err => {
        console.error("Erro ao remover o aluno", err);
      }
    });
  }
}
