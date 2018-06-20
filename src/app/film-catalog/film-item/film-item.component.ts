import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'film-item-inner',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})

export class FilmItemComponent implements OnInit {
  @Input('filmInfo') film: object;
  @Output() update = new EventEmitter<number>();
  @Output() unUpdate = new EventEmitter<number>();
  value: boolean = true;
  init: boolean;
  chois: string = "Добавить в избанное";

  constructor() { }


  setToParent(el: string) {
    if (this.value) {
      this.update.emit();
      this.value = false;
      this.init = true;
      this.chois = "Удалить с избранного";
    } else {
      this.unUpdate.emit();
      this.value = true;
      this.init = false;
      this.chois = "Добавить в избранное";
    }

  }

  ngOnInit() {
  }

}