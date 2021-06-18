import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  // interpolation
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponents { 
  title = "List of Courses";
  courses: any;

  constructor() {
    let service = new CoursesService();
    this.courses = service.getCourses();
  }
  
}