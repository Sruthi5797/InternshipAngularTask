import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectValueComponent } from './select-value/select-value.component';

// add route component path
const routes: Routes = [
  {
    path: 'select-value',
    component: SelectValueComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
