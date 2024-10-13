import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observation } from '../../models/observation.model';
import { PatientService } from '../../services/patient.service';
import { PostObservationService } from '../../services/PostObservationService';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit, OnChanges {
  @Input() patientId: number = 0;
  @Input() newObservationNotes: [] = [];
  observations: Observation[] = [];
  newObservation: Observation = { id: 0, patientId: 0, notes: '', date: new Date() };
 

  constructor(private patientService: PatientService , private postObservationService: PostObservationService) { }



  ngOnInit() {
    this.loadPatientObservations();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['patientId']) {
      this.loadPatientObservations(); // Vuelve a cargar las observaciones si patientId cambia
    }
  }

  loadPatientObservations() {
    const patient = this.patientService.findPatientById(this.patientId);

    if (patient) {
      this.observations = patient.observations || []; // Inicializa observaciones
    
    }
  }

  addObservation() {
    this.newObservation.patientId = this.patientId;
    this.postObservationService.addObservation(this.newObservation).subscribe(
      (response) => {
        console.log('Observación guardada:', response);
      },
      (error) => {
        console.error('Error al guardar observación:', error);
      }
    );

   
  //  this.observations.push(this.newObservation); // Agrega la nueva observación
    
    this.newObservation = { id: 0, patientId: 0, notes: '', date: new Date() }; // Resetea el formulario
  }

  saveAll() {
    
    this.addObservation()


  } 
 
}
