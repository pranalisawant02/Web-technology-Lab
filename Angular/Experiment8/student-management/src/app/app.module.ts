import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// ✅ Root component (standalone)
import { AppComponent } from './app';

// ✅ Feature components (standalone)
import { HomeComponent } from './components/home/home';
import { StudentListComponent } from './components/student-list/student-list';
import { AddStudentComponent } from './components/add-student/add-student';
import { DeleteStudentComponent } from './components/delete-student/delete-student';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent,          // ✅ standalone component imported
    HomeComponent,         // ✅ standalone component imported
    StudentListComponent,  // ✅ standalone component imported
    AddStudentComponent,   // ✅ standalone component imported
    DeleteStudentComponent // ✅ standalone component imported
  ],
  providers: [],
  bootstrap: [AppComponent]   // ✅ still bootstraps AppComponent
})
export class AppModule {}
