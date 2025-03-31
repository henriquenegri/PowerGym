import { Component, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Treino } from '../classes/treino';

@Injectable({
  providedIn: 'root'
})
export class TreinosService {
  private STORAGE_KEY = 'treinos'
  private treinos: { [userId: number]: Treino[] } = {};

  private obterTreinosDoStorage(): { [userId: number]: Treino[] } {
    const treinos = localStorage.getItem(this.STORAGE_KEY);
    return treinos ? JSON.parse(treinos) : {};
  }

  private salvarTreinosNoStorage(treinos: { [userId: number]: Treino[] }): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(treinos));
  }
  
  saveTreino(userId: number, treino: Treino): Observable<Treino> {
    const treinos = this.obterTreinosDoStorage();
    if (!treinos[userId]) {
      treinos[userId] = [];
    }
    treino.id = treinos[userId].length + 1;
    treinos[userId].push(treino);
    this.salvarTreinosNoStorage(treinos);
    return of(treino);
  }

  getTreinos(userId: number): Observable<Treino[]> {
    const treinos = this.obterTreinosDoStorage();
    return of(treinos[userId] || []);
  }

  constructor() { }
}
