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
                    { PrescriptionId: 1, PatientId: 123456, medication: 'Aspirin', dosage: '500 mg', date: new Date('2023-01-01') }
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
                    { PrescriptionId: 2, PatientId: 2, medication: 'Ibuprofen', dosage: '200 mg', date: new Date('2023-01-05') }
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
                    { PrescriptionId: 3, PatientId: 3, medication: 'Lisinopril', dosage: '10 mg', date: new Date('2023-01-10') }
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
                    { PrescriptionId: 4, PatientId: 4, medication: 'Metformin', dosage: '500 mg', date: new Date('2023-01-15') }
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
                    { PrescriptionId: 5, PatientId: 5, medication: 'Antihistamine', dosage: '10 mg', date: new Date('2023-01-20') }
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
                    { PrescriptionId: 6, PatientId: 6, medication: 'Pain Reliever', dosage: '500 mg', date: new Date('2023-01-25') }
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
                    { PrescriptionId: 7, PatientId: 7, medication: 'Vitamin D', dosage: '1000 IU', date: new Date('2023-01-30') }
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
                    { PrescriptionId: 8, PatientId: 8, medication: 'Multivitamin', dosage: '1 tablet', date: new Date('2023-01-01') }
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
                    { PrescriptionId: 9, PatientId: 9, medication: 'Mood Stabilizer', dosage: '50 mg', date: new Date('2023-01-15') }
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
                    { PrescriptionId: 10, PatientId: 10, medication: 'Anti-inflammatory', dosage: '250 mg', date: new Date('2023-01-20') }
                ],
                observations: [
                    { id: 10, patientId: 10, notes: 'Injury recovery monitored.', date: new Date('2023-02-25') }
                ],
                laboratoryTests: [
                    { id: 10, patientId: 10, testName: 'CT Scan', results: 'Normal', date: new Date('2023-03-05') }
                ]
            },
            {
                id: 11,
                name: 'Wanda',
                lastName: 'Vision',
                dateOfBirth: '1992-09-10',
                age: 32,
                email: 'wandavision@gmail.com',
                address: '501 Evergreen St',
                gender: 'female',
                medicalHistory: [ 'Knee injury from high-speed running in 2019', 'Metabolic changes due to speed force exposure', 'Slight radiation exposure in 2021'],
                prescriptions: [
                    { PrescriptionId: 11, PatientId: 11, medication: 'Anti-inflammatory', dosage: '250 mg', date: new Date('2023-01-20') }
                ],
                observations: [
                    { id: 11, patientId: 11, notes: 'Injury recovery monitored.', date: new Date('2023-02-25') }
                ],
                laboratoryTests: [
                    { id: 11, patientId: 11, testName: 'CT Scan', results: 'Normal', date: new Date('2023-03-05') }
                ]
            },
            {
                id: 12,
                name: 'Peter',
                lastName: 'Pan',
                dateOfBirth: '1987-06-15',
                age: 37,
                email: 'peterpan@gmail.com',
                address: '100 Neverland Blvd',
                gender: 'male',
                medicalHistory: ['Chronic insomnia', 'Fractured wrist in 2017'],
                prescriptions: [
                    { PrescriptionId: 12, PatientId: 12, medication: 'Melatonin', dosage: '10 mg', date: new Date('2023-04-01') }
                ],
                observations: [
                    { id: 12, patientId: 12, notes: 'Experiencing vivid dreams due to insomnia.', date: new Date('2023-05-10') }
                ],
                laboratoryTests: [
                    { id: 12, patientId: 12, testName: 'Sleep Study', results: 'Mild apnea', date: new Date('2023-06-01') }
                ]
            },
            {
                id: 13,
                name: 'Mary',
                lastName: 'Poppins',
                dateOfBirth: '1980-11-05',
                age: 44,
                email: 'marypoppins@gmail.com',
                address: '2 Cherry Tree Lane',
                gender: 'female',
                medicalHistory: ['Asthma diagnosed in 2010', 'Seasonal allergies'],
                prescriptions: [
                    { PrescriptionId: 13, PatientId: 13, medication: 'Inhaler', dosage: 'As needed', date: new Date('2023-07-20') }
                ],
                observations: [
                    { id: 13, patientId: 13, notes: 'Asthma well controlled, but allergies worsening.', date: new Date('2023-08-10') }
                ],
                laboratoryTests: [
                    { id: 13, patientId: 13, testName: 'Allergy Test', results: 'Positive for pollen', date: new Date('2023-08-15') }
                ]
            },
            {
                id: 14,
                name: 'Clark',
                lastName: 'Gable',
                dateOfBirth: '1978-03-18',
                age: 46,
                email: 'clarkgable@gmail.com',
                address: '45 Sunset Blvd',
                gender: 'male',
                medicalHistory: ['Fractured collarbone in 2015', 'Mild hypertension'],
                prescriptions: [
                    { PrescriptionId: 14, PatientId: 14, medication: 'Lisinopril', dosage: '5 mg', date: new Date('2023-09-10') }
                ],
                observations: [
                    { id: 14, patientId: 14, notes: 'Blood pressure stabilized.', date: new Date('2023-09-25') }
                ],
                laboratoryTests: [
                    { id: 14, patientId: 14, testName: 'EKG', results: 'Normal', date: new Date('2023-10-01') }
                ]
            },
            {
                id: 15,
                name: 'Bruce',
                lastName: 'Banner',
                dateOfBirth: '1975-08-22',
                age: 49,
                email: 'brucebanner@gmail.com',
                address: '30 Gamma Labs Blvd',
                gender: 'male',
                medicalHistory: ['Frequent stress-induced episodes', 'Muscle pain'],
                prescriptions: [
                    { PrescriptionId: 15, PatientId: 15, medication: 'Muscle Relaxant', dosage: '20 mg', date: new Date('2023-02-14') }
                ],
                observations: [
                    { id: 15, patientId: 15, notes: 'Muscle tension reduced, but high stress levels remain.', date: new Date('2023-02-28') }
                ],
                laboratoryTests: [
                    { id: 15, patientId: 15, testName: 'Cortisol Test', results: 'Elevated', date: new Date('2023-03-10') }
                ]
            },
            {
                id: 16,
                name: 'Diana',
                lastName: 'Troy',
                dateOfBirth: '1983-07-12',
                age: 41,
                email: 'dianatroy@gmail.com',
                address: '50 Starfleet Way',
                gender: 'female',
                medicalHistory: ['Tension headaches', 'Minor back pain'],
                prescriptions: [
                    { PrescriptionId: 16, PatientId: 16, medication: 'Ibuprofen', dosage: '400 mg', date: new Date('2023-05-12') }
                ],
                observations: [
                    { id: 16, patientId: 16, notes: 'Symptoms improving with physical therapy.', date: new Date('2023-06-01') }
                ],
                laboratoryTests: [
                    { id: 16, patientId: 16, testName: 'MRI Scan', results: 'No abnormalities', date: new Date('2023-06-15') }
                ]
            },
            {
                id: 17,
                name: 'Tony',
                lastName: 'Hawk',
                dateOfBirth: '1968-05-12',
                age: 56,
                email: 'tonyhawk@gmail.com',
                address: '45 Skater Blvd',
                gender: 'male',
                medicalHistory: ['Broken arm in 2002', 'Knee surgery in 2020'],
                prescriptions: [
                    { PrescriptionId: 17, PatientId: 17, medication: 'Pain Reliever', dosage: '500 mg', date: new Date('2023-09-01') }
                ],
                observations: [
                    { id: 17, patientId: 17, notes: 'Recovered well from knee surgery.', date: new Date('2023-09-15') }
                ],
                laboratoryTests: [
                    { id: 17, patientId: 17, testName: 'X-ray', results: 'Knee healing properly', date: new Date('2023-09-20') }
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

