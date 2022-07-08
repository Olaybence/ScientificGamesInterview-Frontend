import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(
    private http: HttpClient
  ) { }

  getRandoms(n: number) : Observable<Number[]> {
    return this.http.get<Number[]>("http://localhost:8080/randoms/" + n);
  }
}
