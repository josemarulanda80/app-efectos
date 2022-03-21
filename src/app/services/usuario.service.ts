import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Datum, Users } from '../interface/interdace';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<Users>(`${this.url}/users?per_page=6`)
    .pipe(
      map( resp => resp['data'])
    );
    
  }
}
