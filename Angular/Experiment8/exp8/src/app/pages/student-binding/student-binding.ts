import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-binding.html',
  styleUrls: ['./student-binding.css']
})
export class StudentBindingComponent {

  studentName: string = "Pranali";
  studentAge: number = 20;

  imageUrl: string = "https://picsum.photos/200";
  newStudent: string = "";
  students: string[] = [];

  showList: boolean = true;

  addStudent() {
    if (this.newStudent.trim() !== "") {
      this.students.push(this.newStudent);
      this.newStudent = "";
    }
  }

  toggleList() {
    this.showList = !this.showList;
  }
}