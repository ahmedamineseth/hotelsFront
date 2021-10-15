import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resa } from '../classe/resa';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class ResaService {

  constructor( private http : HttpClient , private configService : ConfigService ) { }

  loadResas(){
    return this.http.get<Resa[]>( environment.apiUrl + "resa" , this.configService.httpOptions );
  }

  addResa( resa : Resa ) : Observable<Resa> {
    return this.http.post<Resa>( environment.apiUrl + "resa" , resa , this.configService.httpOptions )
  }

  getResa( id? : number ) : Observable<Resa> {
    return this.http.get<Resa>( environment.apiUrl  + "resa/"+id ,  this.configService.httpOptions  );
  }


  editResa( resa : Resa ) : Observable<Resa> {
    return this.http.put<Resa>( environment.apiUrl + "resa/"+resa.id, resa ,  this.configService.httpOptions )
  }

  deleteResa( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "resa/"+id ,  this.configService.httpOptions )
  }
}
