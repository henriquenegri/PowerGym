import { Component, OnInit } from '@angular/core';
import { TreinosService } from '../services/treinos.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Treino } from '../classes/treino';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-treinos',
  imports: [ FormsModule, CommonModule, RouterLink ],
  templateUrl: './lista-treinos.component.html',
  styleUrl: './lista-treinos.component.css'
})
export class ListaTreinosComponent {
  treinos: Treino[] = [];
  userId: number;

  constructor(
    private treinoService: TreinosService,
    private authService: AuthServiceService
  ) {
    this.userId = this.authService.getCurrentUserId();
  }

  ngOnInit(): void {
    this.carregarTreinos();
  }

  carregarTreinos(): void {
    this.treinoService.getTreinos(this.userId).subscribe(
      (treinos) => {
        this.treinos = treinos;
      },
      (error) => {
        console.error('Erro ao carregar os treinos', error);
      }
    );
  }

}
