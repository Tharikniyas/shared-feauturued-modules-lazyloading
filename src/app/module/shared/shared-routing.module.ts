import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const routes: Routes = [
  {path: 'main',component: MainPageComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SideBarComponent },
  { path: '', component: MainPageComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
