import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  //=======================data=================
   
  public allLetestNews=[
    {
      image:'../../../assets/images/news-01.png',
      title:'Created SASS Section',
      content:'New SASS Examples & Tutorials',
      time:'3 Days Ago'
    },
    {
      image:'../../../assets/images/news-02.png',
      title:'Changed The Design',
      content:'A Brand New Website Design',
      time:'5 Days Ago'
    },
    {
      image:'../../../assets/images/news-03.png',
      title:'Created SASS Section',
      content:'3 Developers Joined The Team',
      time:'8 Days Ago'
    },
    {
      image:'../../../assets/images/news-04.png',
      title:'Added Payment Gateway',
      content:'Many New Payment Gateways Added',
      time:'10 Days Ago'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
