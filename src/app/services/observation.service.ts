import { Injectable } from '@angular/core';
import { Observation } from '../models/observation.model';
import { Patient } from '../models/patient.model';

@Injectable({
    providedIn: 'root'
})
export class ObservationService {
    private observations: Observation[] = []; // Simulación de datos

    addObservation(observation: Observation) {
        this.observations.push(observation);
    }

    getObservationsForPatient(patientId: number) {
        return this.observations.filter(observation => observation.patientId === patientId);
    }
}
