import { Component, Input, OnInit } from '@angular/core';
import { Prescription } from '../../models/prescription.model';
import { PatientService } from '../../services/patient.service';
import { PostPrescriptionService } from '../../services/post-prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  @Input() patientId: number = 0;
  prescriptions: Prescription[] = [];
  newPrescription: Prescription = { PrescriptionId: 0, PatientId: 0, medication: '', dosage: '', date: new Date() };

  constructor(private patientService: PatientService, private postPrescriptionServices:PostPrescriptionService) { }

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
    this.postPrescriptionServices.addPrescription(this.newPrescription).subscribe(


      (response) => {
        console.log('Prescripción guardada:', response);
        this.loadPrescriptions(); // Vuelve a cargar las prescripciones
      },
      (error) => {
        console.error('Error al guardar prescripción:', error);
      }
    );
    
    this.loadPrescriptions()
   // this.newPrescription = { PrescriptionId: 0, PatientId: 0, medication: '', dosage: '', date: new Date() }; // Resetea el formulario
}

  // addPrescription() {
  //   this.newPrescription.PatientId = this.patientId;
  //   this.patientService.addPrescription(this.patientId, this.newPrescription);
  //   this.prescriptions.push(this.newPrescription); // Agrega la nueva prescripción
  //   this.newPrescription = { PrescriptionId: 0, PatientId: 0, Medication: '', dosage: '', Date: new Date() }; // Resetea el formulario
  // }


  loadPrescriptions() { 

    const patient = this.patientService.findPatientById(this.patientId);

    if (patient) {
      this.getPrescriptionNotes(this.patientId); // Inicializa prescripciones
      console.log('Prescripciones cargadas:', this.prescriptions);

  }
}


async getPrescriptionNotes(id: number) { 

  const url = `https://localhost:7288/api/Prescription/PatientID/${id}`;

   const response =  await fetch(url)
    const data = await response.json()
    this.prescriptions = data



  }

}