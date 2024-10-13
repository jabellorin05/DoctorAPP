export interface Prescription {
    PrescriptionId: number;           // Identificador único para la receta
    PatientId: number;   // ID del paciente al que pertenece la receta
    Medication: string;   // Nombre del medicamento
    dosage: string;      // Dosificación del medicamento
    Date: Date;          // Fecha de la receta
}
