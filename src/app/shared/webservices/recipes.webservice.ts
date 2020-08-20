import { ObservableService } from './../services/observableService.service';
import { Tab1Page } from './../../tab1/tab1.page';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesWebService {

  apiKey = 'ff3ba4f45f4a4fff8e7bd91d513d39e3';
  
  inputQueryValue: string;
  
  baseUrl = `https://api.spoonacular.com/recipes/`;

  isComplete = false;
  subscription$: Subscription;

  constructor(private http: HttpClient, private observableService: ObservableService) { }

   getRecipes(inputQueryValue): Observable<any> {
     return this.http.get<any>(this.baseUrl + `complexSearch?query=${inputQueryValue}&apiKey=${this.apiKey}`);
   }

   getDetails(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + `${id}/information?apiKey=${this.apiKey}`);
   }


  private handleError(error: HttpErrorResponse) {
    console.log('UserWebService error', error);

    return throwError('Something bad happened; please try again later.');
  }

}
