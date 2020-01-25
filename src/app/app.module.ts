import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatDialogModule, MatCardModule, MatInputModule, MatIconModule, MatTableModule, MatProgressSpinnerModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ClassComponent } from './class/class.component';

@NgModule({
    declarations: [
        AppComponent,
        TeacherComponent,
        HomeComponent,
        AddTeacherComponent,
        EditTeacherComponent,
        StudentComponent,
        AddStudentComponent,
        EditStudentComponent,
        ClassComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatCardModule,
        MatDialogModule,
        MatToolbarModule,
        MatButtonModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
