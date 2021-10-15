import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppComponent } from '../app.component';
import { Hotel } from '../classe/hotel';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor( private http : HttpClient , private appComponent : ConfigService ) { }

  loadHotels(){
    return this.http.get<Hotel[]>( environment.apiUrl + "hotel" , this.appComponent.httpOptions   );
  }

  addHotel( hotel : Hotel ) : Observable<Hotel> {
    return this.http.post<Hotel>( environment.apiUrl + "hotel" , hotel , this.appComponent.httpOptions )
  }

  getHotel( id? : number ) : Observable<Hotel> {
    return this.http.get<Hotel>( environment.apiUrl  + "hotel/"+id  , this.appComponent.httpOptions );
  }


  editHotel( Hotel : Hotel ) : Observable<Hotel> {
    return this.http.put<Hotel>( environment.apiUrl + "hotel/"+Hotel.id, Hotel , this.appComponent.httpOptions  )
  }

  deleteHotel( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "hotel/"+id  , this.appComponent.httpOptions  )
  }

}
