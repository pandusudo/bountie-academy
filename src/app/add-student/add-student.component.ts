import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroupDirective, ReactiveFormsModule, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

    constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }

    studentForm: FormGroup;
    name:string='';
    isLoadingResults = false;

    ngOnInit() {
        this.studentForm = this.formBuilder.group({
            'name' : [null, Validators.required],
        });
    }

    onFormSubmit(form:NgForm) {
        this.isLoadingResults = true;
        this.dataService.addStudent(form)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/student']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
}
