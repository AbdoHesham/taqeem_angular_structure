import { Component, OnInit } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';
import { HomeService } from '../../../core/services/home.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  cartCount: any;
  constructor(
    private HomeService: HomeService,
    private router: Router
  ) {
  }
  expanded = false;
  isMenuCollapsed = true;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  ngOnInit(): void {
 
  }
  signIn() {
    this.router.navigateByUrl('/auth/login')
  }
  signUp() {
    this.router.navigateByUrl('/auth/signup')
  }
  logOut() {
    localStorage.removeItem('login');
    this.router.navigateByUrl('/auth/login')
  }
}
