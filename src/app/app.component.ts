import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedPatientId: number | null = null;

  onPatientSelected(patientId: number) {
    this.selectedPatientId = patientId;
  }

  saveAll() {

    console.log("All data saved for patient ID:", this.selectedPatientId);
  }
}