import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MainComponent} from './main/main.component';
import {Definitions} from './definitions';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  response;

  constructor(
    private httpClient: HttpClient
  ) { }

  searchWords(words: string): Observable<HttpResponse<Definitions>>  {
    // console.log('https://api.dictionaryapi.dev/api/v1/entries/en/' + words["searchedWord"]);

    this.response = this.httpClient.get<Definitions>
    ('https://api.dictionaryapi.dev/api/v1/entries/en/' + words["searchedWord"], { observe: 'response' })
      .pipe(catchError(this.errorHandler)
    );
    // console.log(this.response);
    return this.response;
  }

  errorHandler(error) {
    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(errorMessage);
  }
}
