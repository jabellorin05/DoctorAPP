export interface LaboratoryTest {
    id: number;               // Unique identifier for the laboratory test
    patientId: number;       // ID of the patient associated with the laboratory test
    testName: string;        // Name of the laboratory test
    results: string;         // Results of the laboratory test
    date: Date;              // Date of the laboratory test
}
