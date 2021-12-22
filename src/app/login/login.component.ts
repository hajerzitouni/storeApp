import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { RouteGuardService } from '../shared/route-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  login: any = {
  username: '',
  password: '',
  }
  constructor(
    private routeGuardService: RouteGuardService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.loginService.loginSend(this.login).subscribe(response => {
      console.log(response)
      this.routeGuardService.loginApp(response);
      this.router.navigate(['home'])
    })
  }

}


