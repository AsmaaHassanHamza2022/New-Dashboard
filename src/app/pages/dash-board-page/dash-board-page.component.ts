import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, from, interval, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-dash-board-page',
  templateUrl: './dash-board-page.component.html',
  styleUrls: ['./dash-board-page.component.scss']
})
export class DashBoardPageComponent implements OnInit {
  public translationKey:Observable<string>;
  constructor(private route:ActivatedRoute ,public router:Router,private translate: TranslateService) { 
    this.translationKey=this.translate.get("subscription_msg");
    // this.translationKey=this.translate.instant('subscription_msg');
    console.log(this.router.getCurrentNavigation()?.extras.state)
    this.router.getCurrentNavigation()?.extras.state;

  }
  ngOnInit(): void {

    this.translate.use('en')
  }

  get Key(){
    return this.translate.instant("subscription_msg")
  }
  get Key2(){
    return this.translate.get("subscription_msg")
  }

}
