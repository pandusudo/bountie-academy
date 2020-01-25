import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Student } from '../student'

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    displayedColumns: string[] = ['name','id'];
    data: Student[] = [];
    isLoadingResults = true;

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.getStudents()
        .subscribe(res => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }

    deleteStudent(id) {
        this.isLoadingResults = true;
        this.dataService.deleteStudent(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.dataService.getStudents()
            .subscribe(res => {
                this.data = res;
                console.log(this.data);
                this.isLoadingResults = false;
            }, err => {
                console.log(err);
                this.isLoadingResults = false;
            });
            this.router.navigate(['/student']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        }
    );
}
}
