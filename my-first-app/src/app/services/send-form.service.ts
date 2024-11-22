import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendFormService {

  constructor() { }

  callingBackend(info: string) {
    console.log("Sendding "+info+" to backend");
  }

}
