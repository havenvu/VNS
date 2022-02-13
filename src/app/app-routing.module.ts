import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ExploreComponent} from "./pages/explore/explore.component"
import{ManonthemoonComponent} from "./pages/manonthemoon/manonthemoon.component"


const routes: Routes = [
  {path: 'explore',
  component:ExploreComponent},
  {path:'manonthemoon',
component:ManonthemoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
