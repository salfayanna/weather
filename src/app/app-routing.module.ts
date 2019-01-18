import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TileComponent } from './Components/tile/tile.component';
import { FiveDaysComponent } from './Components/five-days/five-days.component';

const routes: Routes = [
  { path: 'tile', component: TileComponent },
  { path: 'five-days', component: FiveDaysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
