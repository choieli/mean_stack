import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input()
  tasks: any;

  ngOnInit() {
    // this.tasks = {title: "", description: ""},
    // this.getallshit();
  }

  // getallshit(){
  //   let obs = this._httpService.getTasks();
  //   obs.subscribe(data => {
  //     // console.log(data);
      
  //     this.tasks=data;
  //   })
  // }

  // deleteTask(id:any){
  //   let obs = this._httpService.deleteTask(id,this.tasks);
  //   obs.subscribe(data => {
  //     this.getallshit();
  //   })
  // }

  // refresh(): void {
  //   window.location.reload();
  //   this._router.navigate(['/'])
  // }




  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    // _httpService.getTasks();
  }
}
