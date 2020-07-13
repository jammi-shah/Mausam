import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {WeatherStackService } from './Weatherstack.service';
import { HistoricComponent } from './historic/historic.component';
import { ExceptionComponent } from './exception/exception.component';
import { HomeComponent } from './home/home.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [AppComponent, WeatherComponent, HistoricComponent, ExceptionComponent, HomeComponent, PredictionComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherStackService],
  bootstrap: [AppComponent]
})
export class AppModule {}
