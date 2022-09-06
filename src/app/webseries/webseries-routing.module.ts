import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { WebseriesComponent } from './webseries.component';

const routes: Routes = [
  {
    path:'',
    component:WebseriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebseriesRoutingModule { }
