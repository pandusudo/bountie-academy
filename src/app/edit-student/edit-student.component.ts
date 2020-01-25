import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-student',
    templateUrl: './edit-student.component.html',
    styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

    studentForm: FormGroup;
    id: string='';
    name:string='';
    isLoadingResults = false;

    constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getStudent(this.route.snapshot.params['id']);
        this.studentForm = this.formBuilder.group({
            'name' : [null, Validators.required],
        });
    }

    getStudent(id) {
        this.dataService.getStudent(id).subscribe(data => {
            this.id = data.id;
            this.studentForm.setValue({
                name: data.name,
            });
        });
    }

    onFormSubmit(form:NgForm) {
        this.isLoadingResults = true;
        this.dataService.updateStudent(this.id, form)
        .subscribe(res => {
            let id = res['id'];
            this.isLoadingResults = false;
            this.router.navigate(['/student']);
        }, (err) => {
            console.log(this.id)
            console.log(err);
            this.isLoadingResults = false;
        }
    );}
}
