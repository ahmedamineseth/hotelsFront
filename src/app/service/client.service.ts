import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../classe/client';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http : HttpClient , private configService : ConfigService ) { }

  loadClients(){
    return this.http.get<Client[]>( environment.apiUrl + "client" , this.configService.httpOptions );
  }

  addClient( Client : Client ) : Observable<Client> {
    return this.http.post<Client>( environment.apiUrl + "client" , Client , this.configService.httpOptions )
  }

  getClient( id? : number ) : Observable<Client> {
    return this.http.get<Client>( environment.apiUrl  + "client/"+id ,  this.configService.httpOptions  );
  }


  editClient( client : Client ) : Observable<Client> {
    return this.http.put<Client>( environment.apiUrl + "client/"+client.id, client ,  this.configService.httpOptions )
  }

  deleteClient( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "client/"+id ,  this.configService.httpOptions )
  }
}
