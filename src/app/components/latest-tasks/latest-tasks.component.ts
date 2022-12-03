import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-tasks',
  templateUrl: './latest-tasks.component.html',
  styleUrls: ['./latest-tasks.component.scss']
})
export class LatestTasksComponent implements OnInit {

  public allLatestTasks=[
    {
     
      title:'Record One New Video',
      content:'Record Python Create Exe Project',
      deleteFlag:false
     
    },
    {

      title:'Write Article',
      content:'Write Low Level vs High Level Languages',
      deleteFlag:false
    },
    {
   
      title:'Finish Project',
      content:'Publish Academy Programming Project',
      deleteFlag:false
     
    },
    {
   
      title:'Attend The Meeting',
      content:'Attend The Project Business Analysis Meeting',
      deleteFlag:false
     
    },
    {
    
      title:'Added Payment Gateway',
      content:'Many New Payment Gateways Added',
      deleteFlag:false
    
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  delete(deletedElementIndex:number){
    this.allLatestTasks= this.allLatestTasks.map((item ,index)=>{
      if(deletedElementIndex == index){
        return {
          ...item,
          deleteFlag:true
  
        }
      }else{
        return {
          ...item,
  
        }
      }
     
    })
  }

}
