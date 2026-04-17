import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, course: 'Math' },
    { id: 2, name: 'Jane Smith', age: 22, course: 'Science' }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }
}
