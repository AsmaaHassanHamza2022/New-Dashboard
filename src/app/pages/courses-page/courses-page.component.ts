import { Component, OnInit } from '@angular/core';
import { MyCourses } from 'src/app/models/Course';
import { CouresService } from 'src/app/services/coures.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  //================================data================================
  
  public courses:MyCourses[]=[
    // {
    //   title:"Mastering Web Design",
    //   Description:"Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    //   numberOfStudent:950,
    //   price:165,
    //   ProfileImage:'../../../assets/images/course-01.jpg',
    //   instructorImage:'../../../assets/images/team-01.png'
    // }
  ]

  constructor(public coursesSer:CouresService) {
    this.coursesSer.getAllCourses().subscribe((res)=>{
      console.log(res)
    this.courses=res;
    })
   }

  ngOnInit(): void {
  }

}
