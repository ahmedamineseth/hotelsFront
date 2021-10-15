import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../classe/client';
import { Hotel } from '../classe/hotel';
import { Resa } from '../classe/resa';
import { ClientService } from '../service/client.service';
import { HotelService } from '../service/hotel.service';
import { ResaService } from '../service/resa.service';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.component.html',
  styleUrls: ['./resa.component.css']
})
export class ResaComponent implements OnInit {

  r : Resa = new Resa(); 
  resas : Array<Resa> = []
  search : string  = "" ; 
  success : boolean = false
  error : boolean = false
  clients : Array<Client> = []
  hotels : Array<Hotel> = []
  errorMsg : string = ""

  @ViewChild( 'closebutton' ) closebuttonelement: any; 
  

  constructor( private rs: ResaService ,  private cs: ClientService ,  private hs: HotelService  ) { }

  ngOnInit(): void {
    this.loadResa()
    this.clients

    this.cs.loadClients().subscribe(
      data => { this.clients = data },
      err => {  }
    );

    this.hs.loadHotels().subscribe(
      data => { this.hotels = data },
      err => {  }
    );

    

  }

  loadResa(){
    this.rs.loadResas().subscribe(
      data => { this.resas = data },
      err => {  }
    );
  }

  submitForm(){
    if( this.r.id == undefined ){
      this.rs.addResa( this.r ).subscribe(
        data => { 
          console.log( data ); 
          this.closebuttonelement.nativeElement.click();
          this.loadResa();
          this.success = true; 
        },
        err => {
          this.error = true 
          this.errorMsg = err.error.message 
        }
      )
    }else{
      this.rs.editResa( this.r ).subscribe(
        data => { 
          console.log( data ); 
          this.closebuttonelement.nativeElement.click();
          this.loadResa();
          this.success = true; 
        },
        err => {
          this.error = true 
          this.errorMsg = err.error.message 
        }
      )
    }
      
  }

  resetForm(){
    this.r = new Resa(); 
  }

  delete( id ?: number ){
    if( confirm( "Êtes vous sur ?" ) ){
      this.rs.deleteResa( id ).subscribe(
        data => { 
          this.loadResa();
          this.success = true; 
        }
      )
    }
  }

  edit( id ?: number ){
    this.rs.getResa( id ).subscribe(
      data => { 
        this.r = data
      }
    )
  }

  checkClient( c1 : Client, c2: Client ) : boolean{
    return c1 && c2 && c1.id == c2.id
  }

  checkHotel( c1 : Hotel, c2: Hotel ) : boolean{
    return c1 && c2 && c1.id == c2.id
  }

}
