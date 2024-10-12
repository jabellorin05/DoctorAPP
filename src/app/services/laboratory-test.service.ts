import { Injectable } from '@angular/core';
import { LaboratoryTest } from '../models/laboratory-test.model';

@Injectable({
    providedIn: 'root'
})
export class LaboratoryTestService {
    private laboratoryTests: LaboratoryTest[] = []; // Simulated data storage

    addLaboratoryTest(test: LaboratoryTest) {
        this.laboratoryTests.push(test);
    }

    getTestsForPatient(patientId: number) {
        return this.laboratoryTests.filter(test => test.patientId === patientId);
    }
}
