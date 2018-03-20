import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Menu } from './menu';
import { MENU } from './mock-menu-data';

@Injectable()
export class MenuDataService {

  constructor() { }
  // Serving mock menu data
  getMenuData(): Observable<Menu[]> {
    return of(MENU);
  }

}
