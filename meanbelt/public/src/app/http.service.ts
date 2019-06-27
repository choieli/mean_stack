import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _httpClient: HttpClient) { }
  
  getTasks () {
    return this._httpClient.get('/new');
  }
  
  SubmitNewTask(task) {
    return this._httpClient.post('/new',task);
  }
  
  updateTask(id, editTask){
    return this._httpClient.put(`/update/${id}/edit`, editTask);
  }
  
  getTasksone(id: any) {
    return this._httpClient.get(`/update/${id}`);
  }
  
  deleteTask(id, task){
    return this._httpClient.delete(`/update/${id}`,task);
  }
  createReview(id, newReview) {
    return this._httpClient.post(`/new/${id}/reviews`, newReview);
  }
  
}
