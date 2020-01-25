import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Class } from '../class'
// import { Teacher } from '../teacher'

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

    displayedColumns: string[] = ['idTeacher','id'];
    data: Class[] = [];
    isLoadingResults = true;

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.getClasses()
        .subscribe(res => {
            this.data = res
            this.isLoadingResults = false;
            // there is bug in this code
            // but it works if i log it in console
            // it's not working in the user interface
            // i don't have time left to fix this.
            // i can fix this if i have more time
            // for (let i = 0; i < res.length; i++) {
            //     console.log(res[i].idTeacher);
            //     this.dataService.getTeacher(res[i].idTeacher)
            //     .subscribe(res => {
            //         this.temp.push(res);
            //         this.isLoadingResults = false;
            //     }, err => {
            //         console.log(err);
            //         this.isLoadingResults = false;
            //     });
            // }
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });

        this.data = this.temp
        console.log(this.data)
    }

    deleteClass(id) {
        this.isLoadingResults = true;
        this.dataService.deleteClass(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.dataService.getClasses()
            .subscribe(res => {
                this.data = res;
                console.log(this.data);
                this.isLoadingResults = false;
            }, err => {
                console.log(err);
                this.isLoadingResults = false;
            });
            // this.router.navigate(['/class']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        }
    );
}

}
