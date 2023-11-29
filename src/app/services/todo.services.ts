import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo }  from '../models/todo.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TodoService {
  todo: Todo[] = [];
  private Url = `http://127.0.0.1:8000/api/to_do/`
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  // 全てのtodoをGETする
  getAllTodo(): Promise<Todo[]> {
    return this.http
    .get<Todo[]>(this.Url)
    .toPromise()
    .then(response => response as Todo[])
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // 開発用途のログ
    return Promise.reject(error.message || error);
  }
}