import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewreviewComponent } from './newreview/newreview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'new', component: NewComponent},
  { path: 'pets/:id/edit', component: UpdateComponent},
  { path: 'pets/:id', component:ReviewsComponent},
  { path: 'new/:id/reviews', component: NewreviewComponent},
  { path: '', component:HomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
