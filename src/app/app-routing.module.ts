import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from "./home/home.component";
import { AddTeacherComponent } from "./add-teacher/add-teacher.component"
import { EditTeacherComponent } from "./edit-teacher/edit-teacher.component";

const routes: Routes = [
    { path: 'teacher', component: TeacherComponent },
    { path: 'home', component: HomeComponent },
    { path: 'editTeacher/:id', component: EditTeacherComponent },
    { path: 'addTeacher', component: AddTeacherComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
