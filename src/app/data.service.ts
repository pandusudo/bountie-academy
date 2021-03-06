import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Teacher } from './teacher';
import { Student } from './student';
import { Class } from './class';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient ) { }

    getTeachers (): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(apiUrl + '/instructors')
        .pipe(
            tap(teachers => console.log('Fetch teachers')),
            catchError(this.handleError('getTeachers', []))
        );
    }

    getTeacher (id: number): Observable<Teacher> {
        return this.http.get<Teacher>(apiUrl + '/instructors/' + id)
        .pipe(
            tap(_ => console.log('Fetch teachers')),
            catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
        );
    }

    addTeacher (teacher): Observable<Teacher> {
        return this.http.post<Teacher>(apiUrl + '/instructors', teacher, httpOptions).pipe(
            tap((teacher: Teacher) => console.log(`added teacher w/ id=${teacher.id}`)),
            catchError(this.handleError<Teacher>('addTeacher'))
        );
    }

    updateTeacher (id, teacher): Observable<any> {
        const url = `${apiUrl}/instructors/${id}`;
        return this.http.put(url, teacher, httpOptions).pipe(
            tap(_ => console.log(`updated teacher id=${id}`)),
            catchError(this.handleError<any>('updateTeacher'))
        );
    }

    deleteTeacher (id): Observable<Teacher> {
        const url = `${apiUrl}/instructors/${id}`;

        return this.http.delete<Teacher>(url, httpOptions).pipe(
            tap(_ => console.log(`deleted teacher id=${id}`)),
            catchError(this.handleError<Teacher>('deleteTeacher'))
        );
    }

    getStudents (): Observable<Student[]> {
        return this.http.get<Student[]>(apiUrl + '/students')
        .pipe(
            tap(teachers => console.log('Fetch students')),
            catchError(this.handleError('getStudents', []))
        );
    }

    getStudent (id: number): Observable<Student> {
        return this.http.get<Student>(apiUrl + '/students/' + id)
        .pipe(
            tap(_ => console.log('Fetch student')),
            catchError(this.handleError<Student>(`getStudent id=${id}`))
        );
    }

    addStudent (student): Observable<Student> {
        return this.http.post<Student>(apiUrl + '/students', student, httpOptions).pipe(
            tap((student: Student) => console.log(`added student w/ id=${student.id}`)),
            catchError(this.handleError<Student>('addStudent'))
        );
    }

    updateStudent (id, student): Observable<any> {
        const url = `${apiUrl}/students/${id}`;
        return this.http.put(url, student, httpOptions).pipe(
            tap(_ => console.log(`updated student id=${id}`)),
            catchError(this.handleError<any>('updateStudent'))
        );
    }

    deleteStudent (id): Observable<Student> {
        const url = `${apiUrl}/students/${id}`;

        return this.http.delete<Student>(url, httpOptions).pipe(
            tap(_ => console.log(`deleted student id=${id}`)),
            catchError(this.handleError<Student>('deleteStudent'))
        );
    }

    getClasses (): Observable<Class[]> {
        return this.http.get<Class[]>(apiUrl + '/class')
        .pipe(
            tap(teachers => console.log('Fetch classes')),
            catchError(this.handleError('getClasses', []))
        );
    }

    getClass (id: number): Observable<Class> {
        return this.http.get<Class>(apiUrl + '/class/' + id)
        .pipe(
            tap(_ => console.log('Fetch class')),
            catchError(this.handleError<Class>(`getClass id=${id}`))
        );
    }

    // addClass (data): Observable<Class> {
    //     return this.http.post<Class>(apiUrl + '/class', data, httpOptions).pipe(
    //         tap((data: Class) => console.log(`added class `)),
    //         catchError(this.handleError<Class>('addClass'))
    //     );
    // }

    // updateStudent (id, student): Observable<any> {
    //     const url = `${apiUrl}/students/${id}`;
    //     return this.http.put(url, student, httpOptions).pipe(
    //         tap(_ => console.log(`updated student id=${id}`)),
    //         catchError(this.handleError<any>('updateStudent'))
    //     );
    // }

    deleteClass (id): Observable<Class> {
        const url = `${apiUrl}/class/${id}`;

        return this.http.delete<Class>(url, httpOptions).pipe(
            tap(_ => console.log(`deleted class id=${id}`)),
            catchError(this.handleError<Class>('deleteClass'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
