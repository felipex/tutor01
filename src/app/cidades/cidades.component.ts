import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../models/Cidades';
import { CidadesService } from '../service/cidades.service';

@Component({
  selector: 'app-cidades',
  standalone: true,
  imports: [],
  templateUrl: './cidades.component.html',
  styleUrl: './cidades.component.css'
})
export class CidadesComponent { 
  cidades: Cidade[] = [{id: 33, nome: 'Cidade'}];

  constructor(private cidadeService: CidadesService) {
  }

  update(uf: number): void {
    console.log("Atualizou ", uf);
  }
}
