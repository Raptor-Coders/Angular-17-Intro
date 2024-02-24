import { Component, OnInit, inject, Input } from '@angular/core';
import { CoursesService } from '../courses.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  courseService = inject(CoursesService)
  course: any = {};
  @Input() id: number = 0;

  async ngOnInit(): Promise<void> {
    console.log('course id: ', this.id);
    this.course = await this.courseService.getCourse(this.id);
  }
}
