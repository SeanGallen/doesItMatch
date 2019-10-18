import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPageComponent } from './component/input-page/input-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: InputPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatInputModule, MatButtonModule],
  exports: [RouterModule, MatInputModule, MatButtonModule]
})
export class AppRoutingModule { }
