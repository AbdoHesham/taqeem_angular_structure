import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../shared/services/settings.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public darkTheme: boolean = false;

  constructor(private router: Router, private settings: SettingsService) {
  }

  ngOnInit(): void {
  }
}
