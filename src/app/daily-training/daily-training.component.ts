import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Treino } from '../alunos/classes/treino';
import { TreinosService } from '../services/treinos.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-daily-training',
  imports: [FormsModule, RouterLink],
  templateUrl: './daily-training.component.html',
  styleUrl: './daily-training.component.css'
})
export class DailyTrainingComponent implements OnInit {
  treinos: Treino = new Treino();
  userId: number = 0;

  constructor(
    private treinoService: TreinosService,
    private authService: AuthServiceService,
    private router: Router,
  ) {
    this.userId = this.authService.getCurrentUserId();
  }

  ngOnInit() {
      this.carregarTreinos();
  }

  carregarTreinos() {
    this.treinoService.getTreinos(this.userId).subscribe(
      (treinos) => {
        if (treinos.length > 0) {
          this.treinos = treinos[0]; // Carrega o primeiro treino, se existir
        }
      },
      (error) => {
        console.error('Erro ao carregar os treinos', error);
      }
    );
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.treinoService.saveTreino(this.userId, this.treinos).subscribe(
        (response) => {
          alert('Treino salvo com sucesso!');
          form.resetForm();
          // Opcional: redirecione para outra página, se necessário
          this.router.navigateByUrl('/alunos/treinos');
        },
        (error) => {
          console.error('Erro ao salvar o treino', error);
          alert('Erro ao salvar o treino.');
        }
      );
    }
  }
}
