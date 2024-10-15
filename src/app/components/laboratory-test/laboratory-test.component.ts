import { Component, Input, OnInit } from '@angular/core';
import { LaboratoryTest } from '../../models/laboratory-test.model';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-laboratory-test',
  templateUrl: './laboratory-test.component.html',
  styleUrls: ['./laboratory-test.component.css']
})
export class LaboratoryTestComponent implements OnInit {
  @Input() patientId: number = 0;
  laboratoryTests: LaboratoryTest[] = [];
  newLaboratoryTest: LaboratoryTest = { id: 0, patientId: 0, testName: '', results: '', date: new Date() };

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    const patient = this.patientService.findPatientById(this.patientId);
    if (patient) {
      this.laboratoryTests = patient.laboratoryTests || []; // Inicializa pruebas de laboratorio
    }
  }

  ngOnChanges(changes: any) { 
    if (changes['patientId']){
      this.loadLaboratoryTest(); // Vuelve a cargar las prescripciones si patientId cambia
    }
  }

  addLaboratoryTest() {
    this.newLaboratoryTest.patientId = this.patientId;
    //this.patientService.addLaboratoryTest(this.patientId, this.newLaboratoryTest);
    this.laboratoryTests.push(this.newLaboratoryTest); // Agrega la nueva prueba
    this.newLaboratoryTest = { id: 0, patientId: 0, testName: '', results: '', date: new Date() }; // Resetea el formulario
  }

  loadLaboratoryTest() { 
    const patient = this.patientService.findPatientById(this.patientId);

    if (patient) {
      this.laboratoryTests = patient.laboratoryTests || []; // Inicializa pruebas de laboratorio
    }
  } 

}
