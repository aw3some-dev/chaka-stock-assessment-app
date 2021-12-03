import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  collapseMenu() {
    this.collapsed = !this.collapsed;
  }
}
