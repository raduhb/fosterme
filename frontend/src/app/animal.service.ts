import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  uri = 'http://localhost:4000';  

  constructor(private http: HttpClient) { }

  getAnimals() {
    return this.http.get(`${this.uri}/animals`);
  }

  getAnimal(id) {
    return this.http.get(`${this.uri}/animals/${id}`);
  }
}
