import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reponse } from '../Response';
import { Comment } from '../Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl = "http://localhost:3333/";
  private apiUrl = this.baseApiUrl+"api/moments"

  constructor(private http:HttpClient) { }

  createComment(data:Comment):Observable<Reponse<Comment>>{
    const url = this.apiUrl+"/"+data.momentId+"/comments"
    return this.http.post<Reponse<Comment>>(url,data);
  }
}
