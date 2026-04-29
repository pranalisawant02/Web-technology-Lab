import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students = [
    { id: 1, name: 'Amit', age: 20, course: 'CSE' },
    { id: 2, name: 'Neha', age: 21, course: 'IT' },
    { id: 3, name: 'Ravi', age: 22, course: 'ENTC' }
  ];

  getStudents() {
    return this.students;
  }
}