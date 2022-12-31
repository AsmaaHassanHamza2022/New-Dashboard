import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userName:string='';

  constructor(private authSer:AuthService) { }

  ngOnInit(): void {
    this.userName=(localStorage.getItem('userName')!).split(' ')[0];
  }

  logout(){
    this.authSer.SignOut()
  }
}
