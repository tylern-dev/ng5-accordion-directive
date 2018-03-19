import { Component, OnInit, ElementRef } from '@angular/core';
import { MENU } from '../mock-menu-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems = MENU;
  isCollapsed=true;

  listClick(event, menu) {
    console.log(event);
    console.log(menu);
    menu.isClosed = !menu.isClosed;

  }

  constructor() { }

  ngOnInit() {
    console.log(this.menuItems);
  }

}
