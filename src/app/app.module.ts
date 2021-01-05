import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GridCellComponent } from './components/grid-cell/grid-cell.component';
import { FullSizeImgComponent } from './components/full-size-img/full-size-img.component';

@NgModule({
  declarations: [
    AppComponent,
    GridCellComponent,
    FullSizeImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
