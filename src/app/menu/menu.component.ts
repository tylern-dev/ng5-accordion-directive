import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() logo: String;

  menuItems: Menu[];

  constructor(private menuDataService: MenuDataService ) { }

  ngOnInit() {
    this.getMenuData();
  }

  // grab mock menu data using a data service
  getMenuData(): void {
    this.menuDataService.getMenuData().subscribe(menuItems => this.menuItems = menuItems);
  }


}
