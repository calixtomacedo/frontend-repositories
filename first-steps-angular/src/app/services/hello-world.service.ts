import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private apiPersonUrl = 'http://192.168.15.100:8081/person';
  //private apiPersonUrl = 'http://localhost:8080/person';

  constructor(private client: HttpClient) { }

  getHelloWorld(): Observable<any> {
    return this.client.get(this.apiPersonUrl)
  }
  
}
