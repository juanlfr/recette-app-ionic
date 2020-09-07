import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecipesWebService {

  apiKey = environment.apikey;

  
  inputQueryValue: string;
  
  baseUrl = `https://api.spoonacular.com/recipes/`;


  constructor(private http: HttpClient) { }

   getRecipes(inputQueryValue): Observable<any> {
     return this.http.get<any>(this.baseUrl + `complexSearch?query=${inputQueryValue}&apiKey=${this.apiKey}`);
   }

   getDetails(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + `${id}/information?apiKey=${this.apiKey}`);
   }


}
