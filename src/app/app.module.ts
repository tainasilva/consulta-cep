import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { TextMaskModule } from 'angular2-text-mask';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routing';

import { CepService } from './services/cep.service';
import { MapsService } from './services/maps.service';

import { AppComponent } from './app.component';
import { ZipCodeDetailsComponent } from './zip-code-details/zip-code-details.component';
import { MapsDetailsComponent } from './maps-details/maps-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ZipCodeDetailsComponent,
    MapsDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUP4J5YNesa68n-KAX4I03_SKiL9Lb6RY'
    })
  ],
  providers: [
    CepService,
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
