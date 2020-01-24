import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Teacher } from './teacher';

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

    deleteTeacher (id): Observable<Teacher> {
        const url = `${apiUrl}/instructors/${id}`;

        return this.http.delete<Teacher>(url, httpOptions).pipe(
            tap(_ => console.log(`deleted teacher id=${id}`)),
            catchError(this.handleError<Teacher>('deleteTeacher'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    // public sendGetRequest(str){
    //     return this.httpClient.get(this.REST_API_SERVER + "/" + str);
    // }
}
