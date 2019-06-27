import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate my Cakes';
  cakeVisibility : boolean;
  newCake: object;
  // cakeClicked: object;
  // newReview: object;
  allCakes: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit(){
    this.newCake = {baker: "", imageUrl: ""}
    // this.newReview = {star: "", description: ""}
    // this.cakeVisibility = false;
    this.getAllCakes();
    
    
  }

  getAllCakes(){
    let obs = this._httpService.getAllCakes();
    obs.subscribe(data =>{
      // console.log(data);
      this.allCakes = data;
      
    })

  }

  createCake(){
    let obs = this._httpService.createCake(this.newCake);
    obs.subscribe(data =>{
      // console.log(data);
      this.allCakes.push(data);
      
    })
  }

  // showSingleCake(cake){
  //   this.cakeVisibility = true;
  //   // this.cakeClicked = cake;
  // }

  


}
