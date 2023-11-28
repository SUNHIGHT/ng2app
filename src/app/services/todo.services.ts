import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo }  from '../models/todo.model';

@Injectable()
export class TodoService {
  todo: Todo[] = [];
  private Url = `http://127.0.0.1:8000/api/todo/`
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  // 全てのtodoをGETする
  getAllTodo(): Promise<Todo[]> {
    return this.http
    .get<Todo[]>(this.Url)
    .toPromise()
    .then(response => response as Todo[])
  }

 
}
