import { Observation } from './observation.model';
import { Prescription } from './prescription.model';
import { LaboratoryTest } from './laboratory-test.model';

export interface Patient {
    id: number;
    name: string;
    lastName: string;
    dateOfBirth: string;
    age: number;
    email: string;
    address: string;
    gender: string;
    medicalHistory: string[];
    prescriptions?: Prescription[];
    observations?: Observation[];
    laboratoryTests?: LaboratoryTest[];
}