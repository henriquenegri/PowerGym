import { Aluno } from './../classes/aluno';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ParamMap, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
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
  protected formSubmitted = false;
  
  constructor(private service: AlunoService,
              private router: Router,
              private route: ActivatedRoute){}

    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = Number(params.get('id'));

        this.service.obterAlunoPorId(this.id).subscribe({
          next: (retorno: Aluno) => {
            this.aluno = retorno;
          },
          error: (erro: any) => {
            console.log("Erro ao trazer as informações: ", erro);
          },
        });
      });
    }
    
    onSubmit(form: NgForm){
      this.formSubmitted = true;
      if(form.invalid){
        Object.keys(form.controls).forEach(field => {
          const control = form.controls[field];
          control.markAsTouched({ onlySelf: true });
        });
        return;
      }

      if (this.id > 0) {
      this.service.editarAluno(this.aluno).subscribe({
        next: (retorno: Aluno) => {
          this.router.navigateByUrl('inicio/alunos');
        },
        error: (erro: any) => {
          console.error('Erro ao alterar o aluno:', erro);
        },
      });
    } else {
      this.service.inserir(this.aluno).subscribe({
        next: (retorno: Aluno) => {
          this.router.navigateByUrl('inicio/alunos');
        },
        error: (erro: any) => {
          console.error('Erro ao inserir aluno:', erro);
        },
      });
    }
      this.router.navigateByUrl('inicio/alunos');
    }

    formatarTelefone() {
    let valor = this.aluno.telefone || '';

    valor = valor.replace(/\D/g, '');

    valor = valor.substring(0, 10);

    if (valor.length > 0) {
      if (valor.length <= 2) {
        valor = `(${valor}`;
      } else if (valor.length <= 6) {
        valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
      } else {
        valor = `(${valor.substring(0, 2)}) ${valor.substring(2, 6)}-${valor.substring(6)}`;
      }
    }

    this.aluno.telefone = valor;
  }

    
}
