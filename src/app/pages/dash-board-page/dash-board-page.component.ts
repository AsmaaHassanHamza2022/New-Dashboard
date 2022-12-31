import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, interval, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-dash-board-page',
  templateUrl: './dash-board-page.component.html',
  styleUrls: ['./dash-board-page.component.scss']
})
export class DashBoardPageComponent implements OnInit {
  constructor(private route:ActivatedRoute ,public router:Router) { 
    console.log(this.router.getCurrentNavigation()?.extras.state)
    this.router.getCurrentNavigation()?.extras.state;

  }
  ngOnInit(): void {
  }

}
