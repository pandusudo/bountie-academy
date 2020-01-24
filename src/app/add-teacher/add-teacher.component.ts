import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroupDirective, ReactiveFormsModule, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-teacher',
    templateUrl: './add-teacher.component.html',
    styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

    constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }

    teacherForm: FormGroup;
    name:string='';
    email:string='';
    address:string='';
    isLoadingResults = false;

    ngOnInit() {
        this.teacherForm = this.formBuilder.group({
            'name' : [null, Validators.required],
            'email' : [null, Validators.required],
            'address' : [null, Validators.required]
        });
    }

    onFormSubmit(form:NgForm) {
        this.isLoadingResults = true;
        this.dataService.addTeacher(form)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/teacher']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
}
