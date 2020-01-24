import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Teacher } from '../teacher'

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

    displayedColumns: string[] = ['name', 'email', 'address','id'];
    data: Teacher[] = [];
    isLoadingResults = true;

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.getTeachers()
        .subscribe(res => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }

    deleteTeacher(id) {
        this.isLoadingResults = true;
        this.dataService.deleteTeacher(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.dataService.getTeachers()
            .subscribe(res => {
                this.data = res;
                console.log(this.data);
                this.isLoadingResults = false;
            }, err => {
                console.log(err);
                this.isLoadingResults = false;
            });
            this.router.navigate(['/teacher']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        }
    );
}
}
