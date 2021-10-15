import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ConfigService } from '../config.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : boolean = false;  

  u = {
    username: "",
    password: ""
  };

  constructor(private us: UserService , private router : Router, private appComponent : ConfigService ) { }

  ngOnInit(): void {
  }

  authenticate() {
    this.us.authenticate(this.u).subscribe(
      data => {
        console.log(data)
        if (data.id > 0) {
          sessionStorage.setItem("connectedUser" , data.username ); 
          sessionStorage.setItem("basicAuth" , "Basic " + data.password ); 
          
          this.appComponent.httpOptions =  {
            headers : new HttpHeaders({
              'Authorization' : "Basic " + data.password
            })
          }

          console.log("redirection");
          this.router.navigate(['hotel'])
        }else{
          this.error = true; 
        }
      } ,
      error => {
        this.error = true; 
      }
    );
  }


}
