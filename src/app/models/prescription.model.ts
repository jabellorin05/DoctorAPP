export interface Prescription {
    id: number;           // Identificador único para la receta
    patientId: number;   // ID del paciente al que pertenece la receta
    medication: string;   // Nombre del medicamento
    dosage: string;      // Dosificación del medicamento
    date: Date;          // Fecha de la receta
}
