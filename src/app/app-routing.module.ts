import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from "./home/home.component";
import { AddTeacherComponent } from "./add-teacher/add-teacher.component"
import { EditTeacherComponent } from "./edit-teacher/edit-teacher.component";
import { StudentComponent } from "./student/student.component"
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
    { path: 'teacher', component: TeacherComponent },
    { path: 'student', component: StudentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'class', component: ClassComponent },
    { path: 'editTeacher/:id', component: EditTeacherComponent },
    { path: 'editStudent/:id', component: EditStudentComponent },
    { path: 'addTeacher', component: AddTeacherComponent },
    { path: 'addStudent', component: AddStudentComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
