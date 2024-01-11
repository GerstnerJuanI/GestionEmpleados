import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.scss'
})
export class ListaEmpleadosComponent {
  empleados: Empleado[] = []
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
    this.empleadosService.getAll().then(arrEmpleados => {
      this.empleados = arrEmpleados;
    });
  }
}
