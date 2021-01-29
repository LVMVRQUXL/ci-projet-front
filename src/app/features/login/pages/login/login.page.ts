import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
