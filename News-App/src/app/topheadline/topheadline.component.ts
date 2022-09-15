import { Component, OnInit } from '@angular/core';
import { NewsAppapiService } from '../service/news-appapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:NewsAppapiService) { }
  topHeadlinesData:any=[]
  ngOnInit(): void {
    this.api.newsHeadline().subscribe((result)=>{
      this.topHeadlinesData=result.articles
      console.log(this.topHeadlinesData)
    })
  }

}
