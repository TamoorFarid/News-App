import { HttpClient } from '@angular/common/http';
import { NewsAppapiService } from './../service/news-appapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:NewsAppapiService) { }
  techHeadlinesData:any=[]
  ngOnInit(): void {
    this.api.techHeadline().subscribe((result)=>{
      this.techHeadlinesData=result.articles
      console.log(this.techHeadlinesData)
    })
  }

}
