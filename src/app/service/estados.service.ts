import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
//import { HttpClient } from '@angular/common/http';
import { WebApiService } from './web-api.service';
import { Estado } from '../models/Estado';

@Injectable({
  providedIn: 'root'
})

export class EstadosService {

  baseURL: string = 'https://servicodados.ibge.gov.br/api/v1/';

  constructor(private webApiService: WebApiService){}

  getAll(): Observable<Estado[]> {
    return this.webApiService.get(this.baseURL + 'localidades/estados');
  }
}
