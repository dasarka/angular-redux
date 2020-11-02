import { setUser, logout } from './../../redux/action';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InitialState } from '../../models/redux.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private ngRedux: NgRedux<InitialState>) { }

  ngOnInit(): void {
    this.ngRedux.dispatch(logout());
  }

  onLoggedIn = () => {
    const user = {
      id: '779877979898',
      firstName: 'Test',
      lastName: 'User',
      loggedIn: true,
      token: '90809809890808test98889809',
      lastLoggedIn: new Date()
    };
    this.ngRedux.dispatch(setUser(user));
    this.router.navigate(['/dashboard']);
  }

}
