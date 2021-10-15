import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  apiUrl : "http://localhost:8080/api/",
  httpOptions : {
      headers : new HttpHeaders({
      'Authorization' : 'Basic YWRtaW46MTIzNA=='
    })
  }
};
 