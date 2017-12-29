import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }         from './app.component';
import { NineByNineComponent }   from './ninebynine/ninebynine.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NineByNineComponent
  ],
  //providers: [ SudokuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
