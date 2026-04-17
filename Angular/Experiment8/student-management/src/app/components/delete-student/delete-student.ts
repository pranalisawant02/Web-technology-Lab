import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.html',
  styleUrls: ['./delete-student.css']
})

export class DeleteStudentComponent {
  id: number = 0;

  constructor(private studentService: StudentService) {}

  deleteStudent() {
    this.studentService.deleteStudent(this.id);
    alert('Student deleted successfully!');
  }
}
