import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username)
    console.log(this.password)

    const requesBody = {
      username: this.username,
      password: this.password,
    };

    console.log(requesBody);


    this.authService.postData(requesBody).subscribe(
      (response) => {

        if (response != null) {
          console.log('Key=====', response);
          localStorage.setItem('keyLogin', response);
          const keylogin = localStorage.getItem('keyLogin');
          console.log('KeyLoginStorage==', keylogin);
          this.router.navigate(['/home'])
        }else
        {alert("ผิด");}
        
      },
      (error) => {
        console.error('ErrorJAA', error);
      }
    )

  }

}
