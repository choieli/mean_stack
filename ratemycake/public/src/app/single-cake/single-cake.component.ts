import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-cake',
  templateUrl: './single-cake.component.html',
  styleUrls: ['./single-cake.component.css']
})
export class SingleCakeComponent implements OnInit {
  @Input() cakeToShow: any;
  averageReview: number;
  constructor() { }

  ngOnInit() {
    this.getAverage();
    console.log(this.cakeToShow);
    
  }

  getAverage(){
    let totalStars = 0;
    let reviewsLength = this.cakeToShow.reviews.length;
    if(reviewsLength == 0) {
      this.averageReview =0;
    } else {
      
      for(let i=0; i<this.cakeToShow.reviews.length;i++){
        totalStars += this.cakeToShow.reviews[i].star;
      }
      this.averageReview = totalStars/(this.cakeToShow.reviews.length);

    }

  }
}
