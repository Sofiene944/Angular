import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from 'src/Interface'; 
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileinfoService {
  private _url:string="http://localhost:8080/upload";
  constructor(private http:HttpClient) { }
  getData():Observable<IData[]>{
    return this.http.get<IData[]>(this._url)
                .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    return Observable.throw (error.message || "Server Error");
  }
}



