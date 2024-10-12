import { Component, EventEmitter, Output } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';


@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  searchTerm: string = '';
  searchCriteria: 'name' | 'id' = 'name'; // Por defecto buscar por nombre
  @Output() patientSelected = new EventEmitter<number>();

  constructor(private patientService: PatientService) {
    this.patients = this.patientService.getPatients();
  }

  filterPatients() {
    this.filteredPatients = this.patients.filter(patient => {
      if (this.searchCriteria === 'name') {
        return patient.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      } else {
        return patient.id.toString() === this.searchTerm;
      }
    });
  }

  onSelectPatient(patientId: number) {
    this.patientSelected.emit(patientId);
    this.searchTerm = '';
    this.filteredPatients = [];
  }
}