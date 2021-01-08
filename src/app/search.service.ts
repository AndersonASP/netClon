import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getResult(name): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/search/multi?api_key=87dfa1c669eea853da609d4968d294be&language=pt-BR&query=' + name + '&include_adult=true')
      .pipe(
        tap(data => data)
      );

  }
}
