import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input()
  thistask: any;
  tasks: any;
  visibility : boolean;
  alltasks:any;
  likes:number;
  
  
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.likes=0;
    this.alltasks = {title: "", description: "", like:'0'},
    this.tasks = {name:'', star: '', description: ''},
    this.getallshit();
    this.visibility = false;
    this._route.params.subscribe(params => {
      // console.log(params); //log the entire params
      // console.log(params['id']); //log the id
      this.thistask = params['id']
      this.getoneshit();
      
    });
  }

  addlike(){
    this.likes  += 1;
    
  }



  getoneshit(){
    //let obs = this._httpService.getTasks(this.id);
    let obs = this._httpService.getTasksone(this.thistask);
    obs.subscribe(data => {
      console.log(data);
      this.tasks=data;
    })
  }

  getallshit(){
    let obs = this._httpService.getTasks();
    obs.subscribe(data => {
      // console.log(data);
      
      this.alltasks=data;
    })
  }
  addnewreview(thistask){
    this.visibility = true;
  }

  
  

  
}
