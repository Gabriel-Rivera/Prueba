import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  formInfo = {
    username: '',
    password: ''
  };
  constructor( private sessionS : SessionService, private route: Router) { }

  ngOnInit() {
  }

  sendForm (form:NgForm) {
    console.log(form.value);
    if(form.value.username==="Admin"&&form.value.password==='1234'){
      localStorage.setItem('username', form.value.username)
      this.route.navigate(['/private']);
    }else
    {
      this.route.navigate(['/Usuario']);
    }
    //  this.sessionS.login(this.formInfo.username,this.formInfo.password)
    //    .subscribe(respuesta => this.route.navigate(["private"]));
  }
}
