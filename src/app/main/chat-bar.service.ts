import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatBarService {
   
  // Private parameters
  private _url: string;
  emitSubject : BehaviorSubject<any | null> = new BehaviorSubject(null);
  /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
  constructor(
    private _httpClient: HttpClient
  ) {
    
  }
  searchQuestion(data): Observable<any> {
    return this._httpClient.post('http://localhost:8090/api/v1/bot/start',data);
  }
  emitObject(data){
    this.emitSubject.next(data);
  }
}
