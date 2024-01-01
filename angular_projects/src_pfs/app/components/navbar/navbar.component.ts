import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/services/jwt-client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
  public loggedIn=false;
  public UserloggedIn=false;
  public AdminloggedIn=false;



  constructor(private jwtService:JwtClientService){}


  ngOnInit(): void 
  {
    this.loggedIn = this.jwtService.isUserLoggedIn() || this.jwtService.isAdminLoggedIn();
    this.UserloggedIn =this.jwtService.isUserLoggedIn();
    this.AdminloggedIn = this.jwtService.isAdminLoggedIn();
  }

  logoutUser()
  {
    this.jwtService.logout();
    this.loggedIn=false;
    this.UserloggedIn=false;
    this.AdminloggedIn=false;
    location.reload();
  }
  

}
