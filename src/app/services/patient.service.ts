import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Prescription } from '../models/prescription.model';
import { Observation } from '../models/observation.model';
import { LaboratoryTest } from '../models/laboratory-test.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private patients: Patient[] = [];

    constructor() {

        this.patients.push(
            {
                id: 123456,
                name: 'Peter',
                lastName: 'Parker',
                dateOfBirth: '1990-01-01',
                age: 34,
                email: 'peter@gmail.com',
                address: '2514 Venice Blvd',
                gender: 'male',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 1, PatientId: 123456, Medication: 'Aspirin', dosage: '500 mg', Date: new Date('2023-01-01') }
                ],
                observations: [
                    { id: 1, patientId: 123456, notes: 'Routine check-up, no issues.', date: new Date('2023-02-15') }
                ],
                laboratoryTests: [
                    { id: 1, patientId: 123456, testName: 'Blood Test', results: 'Normal', date: new Date('2023-03-20') }
                ]
            },
            {
                id: 2,
                name: 'Mary',
                lastName: 'Jane',
                dateOfBirth: '1985-07-12',
                age: 39,
                email: 'maryjane@gmail.com',
                address: '3014 Main St',
                gender: 'female',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 2, PatientId: 2, Medication: 'Ibuprofen', dosage: '200 mg', Date: new Date('2023-01-05') }
                ],
                observations: [
                    { id: 2, patientId: 2, notes: 'Patient has allergies to penicillin.', date: new Date('2023-02-20') }
                ],
                laboratoryTests: [
                    { id: 2, patientId: 2, testName: 'Cholesterol Test', results: 'Elevated', date: new Date('2023-04-10') }
                ]
            },
            {
                id: 3,
                name: 'Clark',
                lastName: 'Kent',
                dateOfBirth: '1988-02-28',
                age: 36,
                email: 'clarkkent@gmail.com',
                address: '2000 Metropolis Ave',
                gender: 'male',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 3, PatientId: 3, Medication: 'Lisinopril', dosage: '10 mg', Date: new Date('2023-01-10') }
                ],
                observations: [
                    { id: 3, patientId: 3, notes: 'Blood pressure slightly elevated.', date: new Date('2023-03-01') }
                ],
                laboratoryTests: [
                    { id: 3, patientId: 3, testName: 'Thyroid Test', results: 'Normal', date: new Date('2023-03-15') }
                ]
            },
            {
                id: 4,
                name: 'Bruce',
                lastName: 'Wayne',
                dateOfBirth: '1975-11-17',
                age: 48,
                email: 'brucewayne@gmail.com',
                address: '1000 Wayne Manor',
                gender: 'male',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 4, PatientId: 4, Medication: 'Metformin', dosage: '500 mg', Date: new Date('2023-01-15') }
                ],
                observations: [
                    { id: 4, patientId: 4, notes: 'Diabetes management ongoing.', date: new Date('2023-02-10') }
                ],
                laboratoryTests: [
                    { id: 4, patientId: 4, testName: 'Glucose Test', results: 'High', date: new Date('2023-04-01') }
                ]
            },
            {
                id: 5,
                name: 'Diana',
                lastName: 'Prince',
                dateOfBirth: '1980-03-21',
                age: 44,
                email: 'dianaprince@gmail.com',
                address: '1500 Paradise Island',
                gender: 'female',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 5, PatientId: 5, Medication: 'Antihistamine', dosage: '10 mg', Date: new Date('2023-01-20') }
                ],
                observations: [
                    { id: 5, patientId: 5, notes: 'Allergy symptoms observed.', date: new Date('2023-02-25') }
                ],
                laboratoryTests: [
                    { id: 5, patientId: 5, testName: 'Allergy Test', results: 'Positive for pollen', date: new Date('2023-03-05') }
                ]
            },
            {
                id: 6,
                name: 'Tony',
                lastName: 'Stark',
                dateOfBirth: '1970-05-29',
                age: 54,
                email: 'tonystark@gmail.com',
                address: '3000 Stark Tower',
                gender: 'male',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 6, PatientId: 6, Medication: 'Pain Reliever', dosage: '500 mg', Date: new Date('2023-01-25') }
                ],
                observations: [
                    { id: 6, patientId: 6, notes: 'Post-surgery recovery monitored.', date: new Date('2023-03-10') }
                ],
                laboratoryTests: [
                    { id: 6, patientId: 6, testName: 'MRI Scan', results: 'Normal', date: new Date('2023-03-12') }
                ]
            },
            {
                id: 7,
                name: 'Natasha',
                lastName: 'Romanoff',
                dateOfBirth: '1984-12-03',
                age: 39,
                email: 'natasharomanoff@gmail.com',
                address: '700 Shield HQ',
                gender: 'female',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 7, PatientId: 7, Medication: 'Vitamin D', dosage: '1000 IU', Date: new Date('2023-01-30') }
                ],
                observations: [
                    { id: 7, patientId: 7, notes: 'Healthy, regular exercise.', date: new Date('2023-02-05') }
                ],
                laboratoryTests: [
                    { id: 7, patientId: 7, testName: 'Vitamin Level Test', results: 'Low', date: new Date('2023-04-15') }
                ]
            },
            {
                id: 8,
                name: 'Steve',
                lastName: 'Rogers',
                dateOfBirth: '1918-07-04',
                age: 105,
                email: 'steverogers@gmail.com',
                address: '1941 Shield HQ',
                gender: 'male',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 8, PatientId: 8, Medication: 'Multivitamin', dosage: '1 tablet', Date: new Date('2023-01-01') }
                ],
                observations: [
                    { id: 8, patientId: 8, notes: 'Regular check-up, no major concerns.', date: new Date('2023-02-01') }
                ],
                laboratoryTests: [
                    { id: 8, patientId: 8, testName: 'Annual Physical Exam', results: 'Excellent', date: new Date('2023-03-01') }
                ]
            },
            {
                id: 9,
                name: 'Wanda',
                lastName: 'Maximoff',
                dateOfBirth: '1989-02-10',
                age: 35,
                email: 'wandamaximoff@gmail.com',
                address: '505 Magic Lane',
                gender: 'female',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 9, PatientId: 9, Medication: 'Mood Stabilizer', dosage: '50 mg', Date: new Date('2023-01-15') }
                ],
                observations: [
                    { id: 9, patientId: 9, notes: 'Counseling sessions ongoing.', date: new Date('2023-02-20') }
                ],
                laboratoryTests: [
                    { id: 9, patientId: 9, testName: 'Psychological Evaluation', results: 'Stable', date: new Date('2023-04-12') }
                ]
            },
            {
                id: 10,
                name: 'Barry',
                lastName: 'Allen',
                dateOfBirth: '1992-09-10',
                age: 32,
                email: 'barryallen@gmail.com',
                address: '101 Speedforce St',
                gender: 'male',
                medicalHistory: [],
                prescriptions: [
                    { PrescriptionId: 10, PatientId: 10, Medication: 'Anti-inflammatory', dosage: '250 mg', Date: new Date('2023-01-20') }
                ],
                observations: [
                    { id: 10, patientId: 10, notes: 'Injury recovery monitored.', date: new Date('2023-02-25') }
                ],
                laboratoryTests: [
                    { id: 10, patientId: 10, testName: 'CT Scan', results: 'Normal', date: new Date('2023-03-05') }
                ]
            }
        );
    }

    getPatients() {
        return this.patients;
    }

    findPatientById(id: number): Patient | undefined {
        return this.patients.find(patient => patient.id === id);
    }

    addObservation(patientId: number, observation: Observation) {
        const patient = this.findPatientById(patientId);
        if (patient) {
            if (!patient.observations) {
                patient.observations = [];
            }
            patient.observations.push(observation);
        }
    }

    addPrescription(patientId: number, prescription: Prescription) {
        const patient = this.findPatientById(patientId);
        if (patient) {
            if (!patient.prescriptions) {
                patient.prescriptions = [];
            }
            patient.prescriptions.push(prescription);
        }
    }

    addLaboratoryTest(patientId: number, test: LaboratoryTest) {
        const patient = this.findPatientById(patientId);
        if (patient) {
            if (!patient.laboratoryTests) {
                patient.laboratoryTests = [];
            }
            patient.laboratoryTests.push(test);
        }
    }
}

