import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LoginService } from '../service/login.service';
import { Movie } from '../service/movie';

import { MovieserviceService } from '../service/movieservice.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, AfterViewInit {

  @ViewChild(LoginComponent, { static: false }) loginComponent: LoginComponent | undefined;

  @ViewChild(LoginService, { static: false }) loginService: LoginService | undefined;
  filtersLoaded: Promise<boolean> | undefined;
 

  public movies: Movie[] = [];

  public editMovie: Movie = {} as Movie;
  //@Input() movies:  any = undefined; 

  public deleteMovie: Movie = {} as Movie;


  numberOfMoviesToDisplay: any;
  loggedIn: boolean | undefined;
  loginusername: string | undefined;
  getFiltersSubscription: any;
  serviceuser: string | undefined;
  constructor(private movieService: MovieserviceService, private loginauth: LoginService, private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
  
    this.getMovies();
    this.getuser();
    console.log("beforeViewInit!", this.loginauth?.curuser);
    this.serviceuser=this.loginauth?.curuser;
    console.log( this.serviceuser," this.serviceuser")



  }
  ngAfterViewInit(): void {
    this.getuser();
    console.log( this.serviceuser," this.serviceuser")

  }






  public getuser() {
    this.getFiltersSubscription = this.loginauth?.getEmitter().subscribe((currentuser) => {
     
      this.loggedIn = true;
     
      this.loginusername = "welcome " + currentuser + "!";
      console.log("ngAfterViewInit 1");

      console.log("ngAfterViewInit 2  ", currentuser, this.loggedIn);
    
      console.log( this.filtersLoaded," this.filtersLoaded")
      this.filtersLoaded =   Promise.resolve(true);
     
      
    });
  }
  public getMovies() {
    this.movieService.getMovies().subscribe(
      (response: Movie[]) => {
        this.movies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  // mode specify if its edit or delete
  public onOpenModal(movie: Movie, mode: String) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'edit') {
      this.editMovie = movie;
      button.setAttribute('data-target', '#editMovieModal');
    }
    if (mode === 'delete') {
      this.deleteMovie = movie;
      button.setAttribute('data-target', '#deleteMovieModal');
    }
    container?.appendChild(button);
    button.click();
  }


  public openModaladd(mode: String) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMovieModal');
    }
    container?.appendChild(button);
    button.click();
  }



  public onAddMovie(addForm: NgForm): void {
    console.log("val", addForm)
    console.log("value", addForm.value)
    document.getElementById('add-movie-form')?.click();
    this.movieService.addMovie(addForm.value).subscribe(
      (response: Movie) => {
        console.log("response", response);
        this.getMovies();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );

  }


  public onUpdateMovie(movie: Movie): void {

    console.log(movie, "movie")
    this.movieService.updateMovie(movie).subscribe(
      (response: Movie) => {
        console.log("response", response);
        this.getMovies();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }


 

  public onDeleteMovie(id: number): void {

    this.movieService.deleteMovie(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getMovies();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public searchMovie(key: string): void {
    const results: Movie[] = [];
    for (const movie of this.movies) {
      if (movie.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || movie.primary_director.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || movie.genre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(movie);
      }

    }
    this.movies = results;
    if (results.length === 0 || !key) {
      this.getMovies();
    }
  }

}

