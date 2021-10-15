import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../classe/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http : HttpClient ) { }

  loadClients(){
    return this.http.get<Client[]>( environment.apiUrl + "client" , environment.httpOptions );
  }

  addClient( Client : Client ) : Observable<Client> {
    return this.http.post<Client>( environment.apiUrl + "client" , Client , environment.httpOptions )
  }

  getClient( id? : number ) : Observable<Client> {
    return this.http.get<Client>( environment.apiUrl  + "client/"+id ,  environment.httpOptions  );
  }


  editClient( client : Client ) : Observable<Client> {
    return this.http.put<Client>( environment.apiUrl + "client/"+client.id, client ,  environment.httpOptions )
  }

  deleteClient( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "client/"+id ,  environment.httpOptions )
  }
}
