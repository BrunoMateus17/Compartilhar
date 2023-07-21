import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moments';
import { environment } from 'src/environments/environment';
import { Reponse } from '../Response';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = "http://localhost:3333/";
  private apiUrl = this.baseApiUrl+"api/moments"

  constructor(private http:HttpClient) { }

  getMoments():Observable<Reponse<Moment[]>>{
    return this.http.get<Reponse<Moment[]>>(this.apiUrl);
  }
  
  getMoment(id: number):Observable<Reponse<Moment>>{
    const url = this.apiUrl+"/"+id;
    return this.http.get<Reponse<Moment>>(url);
  }

  createMoment(formData:FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData)
  }

  removeMoment(id:number){
    const url = this.apiUrl+"/"+id;
    return this.http.delete(url);
  }

  updateMoment(id:number,formData:FormData):Observable<FormData>{
    const url = this.apiUrl+"/"+id;
    return this.http.put<FormData>(url,formData);
  }

}
