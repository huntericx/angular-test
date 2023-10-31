import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

 const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'detail/:id', component: DetailComponent },
  { path: 'detail/drink', component: DetailComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
 // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
