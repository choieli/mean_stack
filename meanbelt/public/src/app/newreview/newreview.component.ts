import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  @Input()
  thistask:any;
  newReview:any;
  anyerror: boolean;
  error:any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newReview = {star: 5, description: ""}
    this.anyerror = false;
    this._route.params.subscribe(params => {
      // console.log(params); //log the entire params
      // console.log(params['id']); //log the id
      this.thistask = params['id']
      // this.getoneshit();
      
    });
  }
  



  createReview(){
    let obs = this._httpService.createReview(this.thistask, this.newReview);
    obs.subscribe((data:any) =>{
      if (data.errors){
        this.anyerror=true;
        this.error={
          errors:data.message
        }
      }
      else{

        console.log(data);
        // this.allCakes.push(data);
        this._router.navigate([`/reviews/${this.thistask}/reviews`])
      }
    })
  }

}
