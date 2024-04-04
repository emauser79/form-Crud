import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  private apiUrl = 'http://localhost:8000/api/forms';

  constructor(private http: HttpClient) {}

  getForms(): Observable<any> {
    return this.http.get(this.apiUrl);
}

createForm(form: any): Observable<any> {
  return this.http.post(this.apiUrl, form);
}

updateForm(id: number, form: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, form);
}

deleteForm(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
}
