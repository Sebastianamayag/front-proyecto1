import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
    
   }

  public activo = 'active';
  public isCollapsed = true;
  ngOnInit(): void {

  }

}
