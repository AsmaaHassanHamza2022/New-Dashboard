import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-search-item',
  templateUrl: './top-search-item.component.html',
  styleUrls: ['./top-search-item.component.scss']
})
export class TopSearchItemComponent implements OnInit {
  public allTopSearch=[
    {
      keyword:'Programming',
      searchCount:'220'
    },
     {
      keyword:'JavaScript',
      searchCount:'180'
    },
    {
      keyword:'PHP',
      searchCount:'160'
    },
    {
      keyword:'Code',
      searchCount:'145'
    },
    {
      keyword:'Design',
      searchCount:'110'
    },
    {
      keyword:'Logic',
      searchCount:'95'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
