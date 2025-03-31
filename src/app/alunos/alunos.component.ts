import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Aluno } from '../classes/aluno';
import { RouterLink } from '@angular/router';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  alunosMock: Aluno[] = [];

  constructor(private service: AlunoService){
    this.alunosMock = service.obterAlunos();
  }

  deletar(id?: number){
    if(id && window.confirm("Tem certeza que deseja remover este aluno?")){
      this.service.removerAluno(id);
    }
  }
}
