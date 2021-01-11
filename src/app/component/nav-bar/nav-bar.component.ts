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
    let element = document.querySelector("#inicio");
    element.classList.add("active");
  }
  navOptions = (nav) => {
    let element = document.querySelector(".active");
    element.classList.remove("active");
    switch (nav) {
      case 'inicio':
        let inicio = document.querySelector("#inicio");
        inicio.classList.add("active");
        this.isCollapsed = true;
        break;
      case 'menu':
        let menu = document.querySelector("#menu");
        menu.classList.add("active");
        this.isCollapsed = !this.isCollapsed;
        break;
      case 'acerca':
        let acerca = document.querySelector("#acerca");
        acerca.classList.add("active");
        this.isCollapsed = true;
        break;

      default:
        break;
    }
  }
}
