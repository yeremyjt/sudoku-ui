import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NineByNineComponent }   from './ninebynine/ninebynine.component';

const routes: Routes = [
  { path: '', redirectTo: '/ninebynine', pathMatch: 'full' },
  { path: 'ninebynine',  component: NineByNineComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
