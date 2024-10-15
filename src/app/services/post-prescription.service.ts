import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostPrescriptionService {

  constructor(private httpClient:HttpClient) { }

  addPrescription(prescription: any){
    return this.httpClient.post('https://localhost:7288/api/Prescription', prescription);
  }


}
