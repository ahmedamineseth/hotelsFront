import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../classe/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  c : Client = new Client(); 
  clients : Array<Client> = []
  search : string  = "" ; 
  success : boolean = false
  error : boolean = false

  @ViewChild( 'closebutton' ) closebuttonelement: any; 
  

  constructor( private cs: ClientService ) { }

  ngOnInit(): void {
    this.loadClient() 
  }

  loadClient(){
    this.cs.loadClients().subscribe(
      data => { this.clients = data },
      err => {  }
    );
  }

  submitForm(){
    if( this.c.id == undefined ){
      this.cs.addClient( this.c ).subscribe(
        data => { 
          console.log( data ); 
          this.closebuttonelement.nativeElement.click();
          this.loadClient();
          this.success = true; 
        }
      )
    }else{
      this.cs.editClient( this.c ).subscribe(
        data => { 
          console.log( data ); 
          this.closebuttonelement.nativeElement.click();
          this.loadClient();
          this.success = true; 
        }
      )
    }
      
  }

  resetForm(){
    this.c = new Client(); 
  }

  delete( id ?: number ){
    if( confirm( "Êtes vous sur ?" ) ){
      this.cs.deleteClient( id ).subscribe(
        data => { 
          this.loadClient();
          this.success = true; 
        }
      )
    }
  }

  edit( id ?: number ){
    this.cs.getClient( id ).subscribe(
      data => { 
        this.c = data
      }
    )
  }
}
