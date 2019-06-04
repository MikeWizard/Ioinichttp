import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the GenericProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GenericProvider {
  apiUrl = 'cambia esto de aca';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) {
    console.log('Hello GenericProvider Provider');
  }

  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, { responseType: 'text' })
  }


  addHero(hero: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/lo que quieras', hero, this.httpOptions)
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<{}> {
    return this.http.delete(this.apiUrl + '/delete', this.httpOptions)
  }

  getUsers() {
     return this.http.get('https://reqres.in/api/users?page=2');
  }

}
