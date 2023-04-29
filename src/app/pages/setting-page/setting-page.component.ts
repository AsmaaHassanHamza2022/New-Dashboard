import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit ,AfterViewInit{

  public types:any[]=[
    {
      name:"ASmaa",
      type:"Female",
      Age:30
    },
    {
      name:"ASmaa",
      type:"Female",
      Age:30
    },
    {
      name:"ASmaa",
      type:"Female",
      Age:30
    },
    {
      name:"ASmaa",
      type:"Female",
      age:30
    },
    {
      name:"ASmaa",
      type:"Female",
      Age:30
    }
  ]

  constructor() { 
    
  }
  ngAfterViewInit(): void {
    let temp='';
    for(let i=0 ; i >this.types.length ;i++){
      temp+= `<div>{{x.`+this.types[i]+`}}</div>
      <div>{{x.`+this.types[i]+`}}</div>
      <div>{{x.`+this.types[i]+`}}</div>
      <hr>`
    }
    document.getElementsByClassName('bodyrr')[0].innerHTML=temp;
  }

  ngOnInit(): void {
    let temp='';
    for(let i=0 ; i >this.types.length ;i++){

      temp+= `<div>{{x.`+this.types[i]+`}}</div>
      <div>{{x.`+this.types[i]+`}}</div>
      <div>{{x.`+this.types[i]+`}}</div>
      <hr>`

    }

    document.getElementsByClassName('body')[0].innerHTML=temp;
  }

}
