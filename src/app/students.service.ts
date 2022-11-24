import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private httpClient: HttpClient) {   }

    get():Observable<Student[]>{
      return this.httpClient.get<Student[]>('http://localhost:3000/students');
    }

}
