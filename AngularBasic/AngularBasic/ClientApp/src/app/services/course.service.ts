//injectable denotes that you can inject this service as dependency injection in other services/components 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getTextFromService(): string {
    return "text from course service";
  }

}
