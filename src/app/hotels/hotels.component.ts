import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotel } from '../classe/hotel';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  h : Hotel = new Hotel(); 
  hotels : Array<Hotel> = []
  search : string  = "" ; 
  success : boolean = false
  error : boolean = false

  @ViewChild( 'closebutton' ) closebuttonelement: any; 
  

  constructor( private hs: HotelService ) { }

  ngOnInit(): void {
    this.loadHotel()
  }

  loadHotel(){
    this.hs.loadHotels().subscribe(
      data => { this.hotels = data },
      err => {  }
    );
  }

  submitForm(){
    if( this.h.id == undefined ){
      this.hs.addHotel( this.h ).subscribe(
        data => { 
          console.log( data ); 
          this.closebuttonelement.nativeElement.click();
          this.loadHotel();
          this.success = true; 
        }
      )
    }else{
      this.hs.editHotel( this.h ).subscribe(
        data => { 
          console.log( data ); 
          this.closebuttonelement.nativeElement.click();
          this.loadHotel();
          this.success = true; 
        }
      )
    }
      
  }

  resetForm(){
    this.h = new Hotel(); 
  }

  delete( id ?: number ){
    if( confirm( "Êtes vous sur ?" ) ){
      this.hs.deleteHotel( id ).subscribe(
        data => { 
          this.loadHotel();
          this.success = true; 
        }
      )
    }
  }

  edit( id ?: number ){
    this.hs.getHotel( id ).subscribe(
      data => { 
        this.h = data
      }
    )
  }


}
