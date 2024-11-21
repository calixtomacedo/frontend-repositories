import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Course } from './../model/course';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  standalone: true
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['name', 'category'];

  constructor() {
    this.courses = [
      { _id: '1', name: 'Angular', category: 'Front-end' }
    ];
  }

  ngOnInit(): void {
  }

}
