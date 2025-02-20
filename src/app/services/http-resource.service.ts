import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpResourceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  primaGet(): Observable<any> {
    return this.httpClient.get('indirizzo del be')
  }

  secondaGet(): Observable<any> {
    return this.httpClient.get('indirizzo del be')
  }
}
