import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    {
        path: 'new',
        component: FormularioComponent
    },
    {
        path: 'edit/:id',
        component: FormularioComponent
    },
    {
        path: 'list',
        component: ListaEmpleadosComponent
    },
    {
        path: '**',
        redirectTo: '/list'
    }
];
