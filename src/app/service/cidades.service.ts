import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Observable } from 'rxjs';
import { Cidade } from '../models/Cidades';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  baseURL: string = 'https://servicodados.ibge.gov.br/api/v1/';

  constructor(private webApiService: WebApiService) { }

  getAll(uf: number): Observable<Cidade[]> {
    const url: string = this.baseURL + `localidades/estados/${uf}/municipios`;
    console.log(url);
    return this.webApiService.get(this.baseURL + `localidades/estados/${uf}/municipios`);
  }
}
