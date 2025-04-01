import { Component } from '@angular/core';
import { RouterModule, Router, ParamMap, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Aluno } from '../classes/aluno';
import { AlunoService } from '../services/aluno.service';


@Component({
  selector: 'app-aluno',
  imports: [ RouterModule, FormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
  protected aluno: Aluno = {};
  protected id: number = 0;
  
  constructor(private service: AlunoService,
              private router: Router,
              private route: ActivatedRoute){
                this.route.paramMap.subscribe((params: ParamMap) => {
                  debugger;

                  this.id = Number(params.get('id'));
                  const aluno = service.obterAlunoPorId(this.id);
                  if(aluno){
                    this.aluno = aluno;
                  }else{
                    console.error('Aluno não localizado');
                  }
                });
              }
    onSubmit(form: NgForm){
      if(this.id > 0){
        this.service.editarAluno(this.aluno);
      }else{
        this.service.inserir(this.aluno);
        alert('Aluno cadastrado');
      }
      this.router.navigateByUrl('alunos');
    }
}
