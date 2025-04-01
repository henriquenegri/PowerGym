import { Routes } from '@angular/router';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: PagInicialComponent},
    { path: 'inicio/alunos', loadComponent: () => import('./alunos/alunos.component').then(m => m.AlunosComponent)},
    { path: 'inicio/alunos/aluno', loadComponent: () => import('./aluno/aluno.component').then(m => m.AlunoComponent)},
    { path: 'inicio/alunos/aluno/:id', loadComponent: () => import('./aluno/aluno.component').then(m => m.AlunoComponent)},
    { path: 'inicio/alunos/treinos', loadComponent: () => import('./daily-training/daily-training.component').then(m => m.DailyTrainingComponent)},
    { path: 'inicio/alunos/treinos/:id', loadComponent: () => import('./daily-training/daily-training.component').then(m => m.DailyTrainingComponent)},
    { path: 'inicio/alunos/exibirTreino/:id', loadComponent: () => import('./lista-treinos/lista-treinos.component').then(m => m.ListaTreinosComponent)},
];
