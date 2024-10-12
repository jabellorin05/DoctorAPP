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
  newPrescription: Prescription = { id: 0, patientId: 0, medication: '', dosage: '', date: new Date() };

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
    this.newPrescription.patientId = this.patientId;
    this.patientService.addPrescription(this.patientId, this.newPrescription);
    this.prescriptions.push(this.newPrescription); // Agrega la nueva prescripción
    this.newPrescription = { id: 0, patientId: 0, medication: '', dosage: '', date: new Date() }; // Resetea el formulario
  }


  loadPrescriptions() { 

    const patient = this.patientService.findPatientById(this.patientId);

    if (patient) {
      this.prescriptions = patient.prescriptions || []; // Inicializa prescripciones


  }
}
}