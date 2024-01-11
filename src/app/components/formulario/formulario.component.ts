import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
	selector: 'app-formulario',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './formulario.component.html',
	styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
	formNewEmpleado: FormGroup = new FormGroup({
		nombre: new FormControl('', [Validators.required]),
		apellido: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required]),
		edad: new FormControl(''),
		departamento: new FormControl(''),
		password: new FormControl(''),
		imagen: new FormControl(''),
	});
	constructor(private empleadoService: EmpleadosService) { }

	onSubmit() {
		console.log(this.formNewEmpleado.value);
		this.empleadoService.insert(this.formNewEmpleado.value);
	}
}
