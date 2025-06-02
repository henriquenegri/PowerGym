import { HttpClient } from '@angular/common/http';
import { Aluno } from './../classes/aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  constructor(private http: HttpClient){}

  private urlApi: string = "http://localhost:8081/";

  public  inserir(dados: Aluno){
    return this.http.post(this.urlApi + "aluno", dados);
  }

  public obterAlunos(){
      return this.http.get<Array<Aluno>>(this.urlApi + "aluno");
  }

  public obterAlunoPorId(id:number){
    return this.http.get(this.urlApi + "aluno/" + id);
  }

  public removerAluno(id?:number){
    return this.http.delete(`${this.urlApi}aluno/${id}`);
  }

  public editarAluno(input: Aluno){
    return this.http.put(this.urlApi + "aluno", input);
  }
}
