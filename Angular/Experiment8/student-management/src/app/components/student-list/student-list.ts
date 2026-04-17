import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})

export class StudentListComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }
}
