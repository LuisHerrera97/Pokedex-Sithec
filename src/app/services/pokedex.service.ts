import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number): Observable<any> {
    const url = `${this.apiUrl}?limit=${limit}&offset=${offset}`;
    return this.http.get(url);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }
}