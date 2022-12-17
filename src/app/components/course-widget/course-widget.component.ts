import { Component, Input, OnInit } from '@angular/core';
import { MyCourses } from 'src/app/models/Course';

@Component({
  selector: 'course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.scss']
})
export class CourseWidgetComponent implements OnInit {
  //================================Input================================
  @Input() course:MyCourses ={} as MyCourses;
  constructor() { }
  ngOnInit(): void {
  }

}
