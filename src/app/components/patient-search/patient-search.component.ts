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
  isLoading: Boolean = true;  // Variable para manejar el estado de carga
  
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
    this.getObservationNotes(this.selectedPatient.id);
   
  }
  if (this.selectedPatient && this.isLoading) {
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
        const imgWidth = 208; // Ancho de la imagen en mm (A4 size)
        const pageHeight = 295; // Altura de la página en mm (A4 size)
        const imgHeight = canvas.height * imgWidth / canvas.width; // Calcula la altura en función del ancho
        
        const doc = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');
        
        const margin = 10; // Margen deseado en mm
        const xPos = (doc.internal.pageSize.getWidth() - imgWidth) / 2 + margin; // Añade margen a la posición X
        const yPos = 0; // Mantén Y en 0 para que la imagen comience desde la parte superior

        doc.addImage(imgData, 'PNG', xPos, yPos, imgWidth - 2 * margin, imgHeight); // Restamos el margen al ancho de la imagen
        doc.save('patient-report.pdf');
    });
}



}
  


async getObservationNotes(id: number) { 

  const url = `https://localhost:7288/api/Observation/PatientID/${id}`;

   const response =  await fetch(url)
    const data = await response.json()
    if (this.selectedPatient) {
      this.selectedPatient.observations = data;
      this.getPrescriptionNotes(id);
      this.isLoading = false;
    }



  }

  async getPrescriptionNotes(id: number) { 

    const url = `https://localhost:7288/api/Prescription/PatientID/${id}`;
  
     const response =  await fetch(url)
      const data = await response.json()
      if (this.selectedPatient) {
        this.selectedPatient.prescriptions = data;
      }
  
  
  
    }

}