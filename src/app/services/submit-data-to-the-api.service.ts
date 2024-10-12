import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from '../models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://tu-api-url.com/api/observations'; // Cambia esta URL a la de tu API

  constructor(private http: HttpClient) { }

  addObservation(observation: Patient): Observable<any> {


    return this.http.post<any>(this.apiUrl, observation);
  }
}