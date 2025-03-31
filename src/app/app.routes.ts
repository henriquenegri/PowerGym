import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'inicio', loadComponent: () => import('./pag-inicial/pag-inicial.component').then(m => m.PagInicialComponent)},
    { path: 'alunos', loadComponent: () => import('./alunos/alunos.component').then(m => m.AlunosComponent)},
    { path: 'alunos/aluno', loadComponent: () => import('./alunos/aluno/aluno.component').then(m => m.AlunoComponent)},
    { path: 'alunos/aluno/:id', loadComponent: () => import('./alunos/aluno/aluno.component').then(m => m.AlunoComponent)},
    { path: 'alunos/treinos', loadComponent: () => import('./daily-training/daily-training.component').then(m => m.DailyTrainingComponent)},
    { path: 'alunos/treinos/:id', loadComponent: () => import('./daily-training/daily-training.component').then(m => m.DailyTrainingComponent)},
    { path: 'alunos/exibirTreino/:id', loadComponent: () => import('./lista-treinos/lista-treinos.component').then(m => m.ListaTreinosComponent)},
];
