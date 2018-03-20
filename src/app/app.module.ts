import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDataService } from './menu-data.service';
import { MenuCollapseDirective } from './menu/menu-collapse.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuCollapseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
