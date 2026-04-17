import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.html',   // ✅ matches your file name
  styleUrls: ['./add-student.css']     // ✅ matches your file name
})
export class AddStudentComponent {
  student: Student = { id: 0, name: '', age: 0, course: '' };

  constructor(private studentService: StudentService) {}

  addStudent() {
    this.student.id = Math.floor(Math.random() * 1000);
    this.studentService.addStudent(this.student);
    alert('Student added successfully!');
  }
}
