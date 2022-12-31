import { Injectable } from '@angular/core';
import { collectionData, Firestore,collection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { CourseData } from '../interfaces/courseInterface';
import { MyCourses } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CouresService {

  constructor(private fire: Firestore   ) {
   }

  public getAllCourses(){
   let item$: Observable<any>;

        const collections = collection(this.fire, 'Courses');
        item$ = collectionData(collections);

        return item$;
      
  }

}
