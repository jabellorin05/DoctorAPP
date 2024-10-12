import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { ObservationComponent } from './components/observation/observation.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { LaboratoryTestComponent } from './components/laboratory-test/laboratory-test.component';

const routes: Routes = [
  { path: 'patient-search', component: PatientSearchComponent },
  { path: 'observations', component: ObservationComponent },
  { path: 'prescriptions', component: PrescriptionComponent },
  { path: 'laboratory-tests', component: LaboratoryTestComponent },
  { path: '', redirectTo: '/patient-search', pathMatch: 'full' } // Redirige a buscar paciente por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
