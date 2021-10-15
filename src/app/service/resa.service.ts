import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resa } from '../classe/resa';

@Injectable({
  providedIn: 'root'
})
export class ResaService {

  constructor( private http : HttpClient ) { }

  loadResas(){
    return this.http.get<Resa[]>( environment.apiUrl + "resa" , environment.httpOptions );
  }

  addResa( resa : Resa ) : Observable<Resa> {
    return this.http.post<Resa>( environment.apiUrl + "resa" , resa , environment.httpOptions )
  }

  getResa( id? : number ) : Observable<Resa> {
    return this.http.get<Resa>( environment.apiUrl  + "resa/"+id ,  environment.httpOptions  );
  }


  editResa( resa : Resa ) : Observable<Resa> {
    return this.http.put<Resa>( environment.apiUrl + "resa/"+resa.id, resa ,  environment.httpOptions )
  }

  deleteResa( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "resa/"+id ,  environment.httpOptions )
  }
}
