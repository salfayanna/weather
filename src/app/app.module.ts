import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './Components/tile/tile.component';
import { HttpClientModule } from '@angular/common/http';
import { FiveDaysComponent } from './Components/five-days/five-days.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    FiveDaysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
