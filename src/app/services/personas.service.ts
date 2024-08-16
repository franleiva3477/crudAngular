import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../data-models/personas.interface';

let linkApi: string='https://thyoerdsjihewxjbrlag.supabase.co/rest/v1/Persona?select=*';

let apikeySupa: string= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeW9lcmRzamloZXd4amJybGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NTUsImV4cCI6MjAzNTYyMjc1NX0.X8sLamdBPOIh-3Xnv7DvpQItiS1ZSzxYjHG1siNO1GU';
let AuthorizationSupa: string ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeW9lcmRzamloZXd4amJybGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NTUsImV4cCI6MjAzNTYyMjc1NX0.X8sLamdBPOIh-3Xnv7DvpQItiS1ZSzxYjHG1siNO1GU';


const headers = new HttpHeaders({
  apikey: apikeySupa,
  Authorization: AuthorizationSupa
})

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getAll(){

    return this.http.get<Persona[]>(linkApi, {headers});
    
  }
}
