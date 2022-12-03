import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-statistics',
  templateUrl: './ticket-statistics.component.html',
  styleUrls: ['./ticket-statistics.component.scss']
})

export class TicketStatisticsComponent implements OnInit {

  public ticketData:any=[
    {
      image:'<i class="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>',
      value:'2500',
      title:'Total'
    },
    {
      image:'<i class="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>',
      value:'500',
      title:'Pending'
    },
    {
      image:'<i class="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>',
      value:'1900',
      title:'Closed'
    },
    {
      image:'<i class="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>',
      value:'100',
      title:'Deleted'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
