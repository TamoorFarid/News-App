import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsAppapiService {

  constructor(private http:HttpClient) { }
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=ad551eda1c224cb08c8b813f9c07d766'
  technews='https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=ad551eda1c224cb08c8b813f9c07d766'
  businessNews='https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=ad551eda1c224cb08c8b813f9c07d766'

  newsHeadline():Observable<any>{
    return this.http.get(this.topHeadlinesNews)
  }
  techHeadline():Observable<any>{
    return this.http.get(this.technews)
  }
  businessHeadlines():Observable<any>{
    return this.http.get(this.businessNews)
  }
}
