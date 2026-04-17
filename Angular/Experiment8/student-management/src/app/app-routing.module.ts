import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ✅ Adjusted imports to match your file names
import { HomeComponent } from './components/home/home';
import { StudentListComponent } from './components/student-list/student-list';
import { AddStudentComponent } from './components/add-student/add-student';
import { DeleteStudentComponent } from './components/delete-student/delete-student';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'delete', component: DeleteStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
