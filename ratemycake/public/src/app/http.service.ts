import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) { }
  
  
  createCake(newCake) {
    
    return this._http.post('/cakes', newCake);
  }
  
  getAllCakes() {
    return this._http.get('/cakes');
  }

  createReview(cakeId, newReview) {
    return this._http.post(`/cakes/${cakeId}/reviews`, newReview);
  }
}
