import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from '../models/patient.model';
import { Observation } from '../models/observation.model';

@Injectable({
  providedIn: 'root'
})
export class PostObservationService {
  private apiUrl = 'https://localhost:7288/api/Observation'; 

  constructor(private http: HttpClient) { }
  
  addObservation(observation: Observation): Observable<any> {



    return this.http.post<any>(this.apiUrl, observation);
  }
}