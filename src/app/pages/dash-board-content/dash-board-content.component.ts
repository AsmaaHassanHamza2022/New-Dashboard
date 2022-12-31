import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash-board-content',
  templateUrl: './dash-board-content.component.html',
  styleUrls: ['./dash-board-content.component.scss']
})
export class DashBoardContentComponent implements OnInit {

  constructor(private route:ActivatedRoute ,public router:Router) { 
    console.log(this.router.getCurrentNavigation()?.extras.state)
    this.router.getCurrentNavigation()?.extras.state;

  }

  ngOnInit(): void {
  }

}
