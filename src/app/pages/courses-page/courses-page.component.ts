import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCourseComponent } from 'src/app/components/add-new-course/add-new-course.component';
import { MyCourses } from 'src/app/models/Course';
import { CouresService } from 'src/app/services/coures.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  //================================data================================
  
  public courses:MyCourses[]=[]

  constructor(public coursesSer:CouresService ,private dialog:MatDialog) {
    this.coursesSer.getAllCourses().subscribe((res)=>{
      console.log(res)
    this.courses=res;
    })
   }

   public openDialog() {
    this.dialog.open(AddNewCourseComponent,{  height: '400px',
    width: '600px',});
  
}

  ngOnInit(): void {
  }

}
