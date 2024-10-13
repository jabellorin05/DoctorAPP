import { Component, Input, OnInit } from '@angular/core';
import { Prescription } from '../../models/prescription.model';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  @Input() patientId: number = 0;
  prescriptions: Prescription[] = [];
  newPrescription: Prescription = { PrescriptionId: 0, PatientId: 0, Medication: '', dosage: '', Date: new Date() };

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.loadPrescriptions()
  }

  ngOnChanges(changes: any) { 
    if (changes['patientId']){
      this.loadPrescriptions(); // Vuelve a cargar las prescripciones si patientId cambia
    }
   

  }

  addPrescription() {
    this.newPrescription.PatientId = this.patientId;
    this.patientService.addPrescription(this.patientId, this.newPrescription);
    this.prescriptions.push(this.newPrescription); // Agrega la nueva prescripción
    this.newPrescription = { PrescriptionId: 0, PatientId: 0, Medication: '', dosage: '', Date: new Date() }; // Resetea el formulario
  }


  loadPrescriptions() { 

    const patient = this.patientService.findPatientById(this.patientId);

    if (patient) {
      this.prescriptions = patient.prescriptions || []; // Inicializa prescripciones


  }
}
}