import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {


  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

public getMovies():Observable<Movie[]>
{
  return this.http.get<Movie[]>(`${this.apiServerUrl}/all`)
}
public addMovie(movie:Movie):Observable<Movie>
{
  return this.http.post<Movie>(`${this.apiServerUrl}/add`,movie);
}

public updateMovie(movie:Movie):Observable<Movie>
{
  return this.http.put<Movie>(`${this.apiServerUrl}/update`,movie);
}


public deleteMovie(id:number):Observable<void>
{
  return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
}

}
