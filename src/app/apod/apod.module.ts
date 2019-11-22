import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApodPageRoutingModule } from './apod-routing.module';

import { ApodPage } from './apod.page';

import { SafePipeModule } from 'safe-pipe';

const routes: Routes = [
  {
    path: '',
    component: ApodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafePipeModule,
    RouterModule.forChild(routes),
    ApodPageRoutingModule
  ],
  declarations: [ApodPage]
})
export class ApodPageModule { }
