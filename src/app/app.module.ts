import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDataService } from './menu-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
