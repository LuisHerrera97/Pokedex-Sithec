import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http : HttpClient) { }
  getPokemons(limit: number, offset: number): Observable<any> {
    const url = `${this.apiUrl}?limit=${limit}&offset=${offset}`;
    return this.http.get(url);
  }
  getPokemonsByUrl(url:string): Observable<any> {
    return this.http.get(url);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }


  setLocalStorage(json: string): void {
    localStorage.setItem('json', json);
  }
  
  getLocalStorage(): any {
    const json = localStorage.getItem('json');
    const array = JSON.parse(json!);
    return array;
  }

  removeLocalStorge(): void {
    localStorage.removeItem('json');
  }
}
