import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Input()
  task: any;
  anyerror: boolean;
  error:any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    this.task = {title: '', type: ''}
    this.anyerror = false;
  }

  SubmitNewTask(){
    console.log(this.task);
    let obs = this._httpService.SubmitNewTask(this.task);
    obs.subscribe((data:any) => {
      if(data.errors){
        this.anyerror=true;
        this.error={
          errors:data.message
        }
      }
      else{
        this.task = {title: '', type: ''}
        console.log('Added new', data)
        this._router.navigate(['/'])
      }
    })
  }

}
