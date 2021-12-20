import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private accountServis: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  isLogged() {
    return this.accountServis.isLogged();
  }

  logOut() {
    this.accountServis.logout();
    this.router.navigate(["products"]);
  }


}
