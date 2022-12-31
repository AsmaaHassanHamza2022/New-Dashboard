import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouresService } from 'src/app/services/coures.service';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent implements OnInit {
public addCourseForm:FormGroup;
public srcResult:any;
public MainUploadedImage:any;
public SubuploadedImage:any;
public waitingUpload:boolean=true;

  constructor(private formBuilder:FormBuilder ,private CouresSer:CouresService) { 
    

    this.addCourseForm=this.formBuilder.group({
      courseProfileImage:['',[Validators.required]],
      // instructorImage:['',[Validators.required]],
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      numberOfStudents:['',[Validators.required]],
      coursePrice:['',[Validators.required]],

    })
  }

  ngOnInit(): void {}

 get f(){
 return this.addCourseForm.controls;
 }

  onFileSelected(fileType:any,event:any) {
    let file=event.target.files[0];
      if(fileType =='mainFile'){
        this.addCourseForm.controls['courseProfileImage'].setValue(file);
        this.MainUploadedImage=file?.name;
      }
      // }else if(fileType =='subFile'){
      //   this.addCourseForm.controls['instructorImage'].setValue(file);
      //   this.SubuploadedImage=file?.name;
      // }
    
  }

  addNewCourse(){
    let data=this.addCourseForm.value;
    console.log(this.addCourseForm)
  }

}


