import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  public baseURL = '/api/v1/cards.json';
  public payloadId = '${payload.id}.json';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.baseURL);
  }

  add(payload) {
    return this.http.post(this.baseURL, { text: payload });
  }

  remove(payload) {
    return this.http.delete(this.baseURL + this.payloadId);
  }

  update(Newpayload) {
    return this.http.patch(this.baseURL + this.payloadId, Newpayload);
  }
}
