import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewreviewComponent } from './newreview/newreview.component';
import { HomeComponent } from './home/home.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UpdateComponent,
    ReviewsComponent,
    NewreviewComponent,
    HomeComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
