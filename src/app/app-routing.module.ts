import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoricComponent} from './historic/historic.component';
import {WeatherComponent} from './weather/weather.component';
import {ExceptionComponent} from './exception/exception.component';
import {HomeComponent} from './home/home.component';
import {PredictionComponent} from './prediction/prediction.component';
import {AboutComponent} from './about/about.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'current', component: WeatherComponent },
  { path: 'historic', component: HistoricComponent },
  { path: 'prediction', component: PredictionComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ExceptionComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
