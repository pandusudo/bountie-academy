import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-teacher',
    templateUrl: './edit-teacher.component.html',
    styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

    teacherForm: FormGroup;
    id: string='';
    name:string='';
    email:string='';
    address:string='';
    isLoadingResults = false;

    constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getTeacher(this.route.snapshot.params['id']);
        this.teacherForm = this.formBuilder.group({
            'name' : [null, Validators.required],
            'email' : [null, Validators.required],
            'address' : [null, Validators.required]
        });
    }

    getTeacher(id) {
        this.dataService.getTeacher(id).subscribe(data => {
            this.id = data.id;
            this.teacherForm.setValue({
                name: data.name,
                email: data.email,
                address: data.address
            });
        });
    }

    onFormSubmit(form:NgForm) {
        this.isLoadingResults = true;
        this.dataService.updateTeacher(this.id, form)
        .subscribe(res => {
            let id = res['id'];
            this.isLoadingResults = false;
            this.router.navigate(['/teacher']);
        }, (err) => {
            console.log(this.id)
            console.log(err);
            this.isLoadingResults = false;
        }
    );
}
}
