import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesService } from '../courses.service';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CourseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  courses: any = [];
  coursesService = inject(CoursesService);
  constructor() {
  }

  async ngOnInit(): Promise<void> {
    this.courses = await this.coursesService.getCourses();
  }
}
