import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EntryPageComponent } from './components/entry-page/entry-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    MainPageComponent,
    EntryPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [HeaderComponent,EntryPageComponent,MainPageComponent,SideBarComponent]
})
export class SharedModule { }
