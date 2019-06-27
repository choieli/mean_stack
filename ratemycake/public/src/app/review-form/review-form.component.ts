import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  @Input() cakeForReview: any;
  newReview: object;
  cakeVisibility : boolean;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newReview = {star: 5, description: ""}
    this.cakeVisibility = false;
  }

  createReview(){
    let obs = this._httpService.createReview(this.cakeForReview._id, this.newReview);
    obs.subscribe(data =>{
      // console.log(data);
      // this.allCakes.push(data);
      
    })
  }

  showSingleCake(cake){
    this.cakeVisibility = true;
    // this.cakeClicked = cake;
  }

}
