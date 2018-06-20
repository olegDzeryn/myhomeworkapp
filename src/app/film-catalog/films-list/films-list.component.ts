import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';
//import { FilmItemComponent } from '..app/film-catalog/film-item/film-item.component';

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {
  aditionalTitle: string;
  description: string = 'Parent component data';


  film2: string = "asd";
  // films1: object[];
  films;
  ass: string = "k";
  numberFilm: number = 0;


  constructor(public filmsService: FilmService) {
  }
  ngOnInit() {
    this.films = this.filmsService.getData();
  }
  setUpdatedValue(eventParam) {
    this.numberFilm++;
  }
  setUnUpdatedValue(eventParam) {
    this.numberFilm--;
  }
  //   sortASC() {

  //     // this.ass = "as";
  //     console.log(this.films);
  // }
  //   sortDESC() {
  //     this.films.sort(function (a, b) {
  //       if (a.name.toLowerCase() < b.name.toLowerCase())
  //         return -1;
  //       if (a.name.toLowerCase() < b.name.toLowerCase())
  //         return 1;
  //       return 0;
  //     })
  //   }
  sortFilms(sortType: boolean) {
    let newList = this.films.sort((a, b) => a.name.localeCompare(b.name));
    //!sortType && newList.reverse();
    if (!sortType) newList.reverse();
    this.films = newList;
    console.log(sortType);
  }

}



