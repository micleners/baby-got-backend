import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangoService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://radiant-brushlands-99143.herokuapp.com/api/';
  }

  getEvents() {
    return this.httpClient.get(`${this.baseUrl}events/`);
  }
}
