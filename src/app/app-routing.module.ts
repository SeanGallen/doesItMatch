import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPageComponent } from './component/input-page/input-page.component';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: InputPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatInputModule],
  exports: [RouterModule, MatInputModule]
})
export class AppRoutingModule { }
