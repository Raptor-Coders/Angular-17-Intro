import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  async getCourses(): Promise<any> {
    const response = await fetch('https://www.raptorcoders.com/api/courses/')
    return response.json();
  }

  async getCourse(courseId: number): Promise<any> {
    const response = await fetch(`https://www.raptorcoders.com/api/courses/${courseId}`)
    return response.json();
  }
}
