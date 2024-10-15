import { Component, EventEmitter, Output } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';
import { Router } from '@angular/router';  // Importa Router
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  selectedPatient: Patient | null = null;  // Variable para almacenar el paciente seleccionado
  noPatientFound: boolean = false;  // Variable para manejar el mensaje de "No se encontró paciente"
  
  
  @Output() patientSelected = new EventEmitter<number>();

  constructor(
    private patientService: PatientService,
    private router: Router  // Inyectar Router
  ) {
    this.patients = this.patientService.getPatients();
  }

 // Método que se ejecuta al cambiar el criterio de búsqueda
 onSearchCriteriaChange() {
  this.searchTerm = '';  // Limpiar el campo de búsqueda
  this.filteredPatients = [];  // Limpiar la lista de pacientes filtrados
  this.noPatientFound = false; // Ocultar mensaje de "no encontrado"
}

// Método para filtrar pacientes
filterPatients() {
  this.filteredPatients = this.patients.filter(patient => {
    if (this.searchCriteria === 'name') {
      return patient.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    } else {
      return patient.id.toString() === this.searchTerm;
    }
  });

  // Mostrar mensaje si no se encuentra ningún paciente
  if (this.filteredPatients.length === 0) {
    this.noPatientFound = true;
    this.selectedPatient = null;  // Limpiar la segunda columna
  } else {
    this.noPatientFound = false;  // Ocultar mensaje si hay pacientes encontrados
  }
}

// Método que se ejecuta al presionar el botón de búsqueda
onSearch() {
  this.filterPatients();
}
onSelectPatient(patientId: number) {
  this.patientSelected.emit(patientId);
  // Buscar el paciente por ID y asignarlo a selectedPatient
  this.selectedPatient = this.patientService.findPatientById(patientId) || null;

  if (this.selectedPatient) {
    this.router.navigate(['/observations', this.selectedPatient.id]);  // Navegar a observaciones con el ID del paciente
  }

  // Limpia el término de búsqueda y la lista de pacientes filtrados
  this.searchTerm = '';
  this.filteredPatients = [];
}

// Generate PDF for the selected patient
generatePDF() {
  const data = document.getElementById('report-content');
  if (data) {
    html2canvas(data).then(canvas => {
      const imgWidth = 208; // A4 size page width in mm
      const pageHeight = 295; // A4 size page height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const doc = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('patient-report.pdf');
    });
  }
}


}