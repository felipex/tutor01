import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../service/estados.service';
import { Estado } from '../models/Estado';
import { CidadesComponent } from '../cidades/cidades.component';
import { Cidade } from '../models/Cidades';
import { CidadesService } from '../service/cidades.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-estados',
  standalone: true,
  imports: [CidadesComponent],
  templateUrl: './estados.component.html',
  styleUrl: './estados.component.css'
})
export class EstadosComponent implements OnInit {
    //this = Document.
    estados: Estado[] = [];
    cidades: Cidade[] = [{id: 17, nome: 'Nome da cidade'}];
    selected = 0;
    selectedValue: string = '';
    @Input() name = 0;

    constructor(private estadosService: EstadosService, private cidadesService: CidadesService){}
    mostraEstado(event: Event) {
      console.log('Update');
      console.log(event.target);
     
      this.cidadesService.getAll(31).subscribe((cidades) => {
        this.cidades = cidades;
        console.log(this.cidades);
      });

    }
    onSelectedValueChange(event: any) {
      if (event.target)
      console.log('Selected value:', event.target.value);
      this.cidadesService.getAll(event.target.value).subscribe((cidades) => {
        this.cidades = cidades;
        console.log(this.cidades);
      });

    }
    ngOnInit(): void {
        this.estadosService.getAll().subscribe((ufs) => {
          this.estados = ufs;
        });
    }
  }
  /*
*/

