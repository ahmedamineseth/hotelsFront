import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic YWRtaW46MTIzNA=='
    })
  }

  constructor() { }


}
