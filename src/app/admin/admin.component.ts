import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './admin.component.html'
})

export class StudentsComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  public ngOnInit(): void {
  }

  public onLogout(): void {
    this.authService.logout();
  }

}
