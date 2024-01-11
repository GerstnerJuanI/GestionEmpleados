import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  
  arrEmpleados: Empleado[];

  constructor() { 
    this.arrEmpleados = [];
  }
  getAll(): Promise<Empleado[]> {
    return Promise.resolve(this.arrEmpleados);
  }
  insert(vEmpledo: Empleado): void{
    this.arrEmpleados.push(vEmpledo);
    console.log(this.arrEmpleados);
  }
}
