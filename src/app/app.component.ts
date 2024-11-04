import { Component } from '@angular/core';
import { EstadosComponent } from './estados/estados.component';
import { CidadesComponent } from "./cidades/cidades.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EstadosComponent, CidadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IBGE';
}
