import { Injectable } from '@angular/core';
import { Prescription } from '../models/prescription.model';

@Injectable({
    providedIn: 'root'
})
export class PrescriptionService {
    private prescriptions: Prescription[] = [];

    addPrescription(prescription: Prescription) {
        this.prescriptions.push(prescription);
    }

    getPrescriptionsForPatient(patientId: number) {
        return this.prescriptions.filter(prescription => prescription.PatientId === patientId);
    }
}
