import { NewsAppapiService } from './../service/news-appapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:NewsAppapiService) { }
  businessNews:any=[]
  ngOnInit(): void {
    this.api.businessHeadlines().subscribe((results)=>{
      this.businessNews=results.articles;
    })
  }

}
