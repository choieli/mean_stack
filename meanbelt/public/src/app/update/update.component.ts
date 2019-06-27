import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input()
  toEdit: any;
  editTask: any;
  anyerror: boolean;
  error:any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.editTask = {title: '', description: '' }
    this.anyerror = false;
    this._route.params.subscribe(params => {
      console.log(params); //log the entire params
      console.log(params['id']); //log the id
      this.toEdit = params['id']
      this.getoneshit();
      
    });
  }

  getoneshit(){
    //let obs = this._httpService.getTasks(this.id);
    let obs = this._httpService.getTasksone(this.toEdit);
    obs.subscribe(data => {
      this.editTask=data;
    })
  }


  updateTask(){
    let obs = this._httpService.updateTask(this.toEdit, this.editTask)
    obs.subscribe((data:any) => {
      if (data.errors){
        this.anyerror=true;
        this.error={
          errors:data.message
        }
      }
      else {
        this.editTask = data
        this._router.navigate(['/'])
        

      }
    })
  }

}
