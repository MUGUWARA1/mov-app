import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilmComponent } from '../card-film/card-film.component';
import { FilmPageComponent } from '../film-page/film-page.component';
import { MoviesServiceService } from '../movies-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Film } from '../Metier/Film';


@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule,CardFilmComponent,FilmPageComponent,HttpClientModule],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent implements OnInit {
   films :Film[] | undefined;
  constructor(private movserv:MoviesServiceService) {
    
  }
  ngOnInit() {
    this.movserv.getAllfilms().subscribe((data)=>{
      this.films=data.results;
    })
  }
}